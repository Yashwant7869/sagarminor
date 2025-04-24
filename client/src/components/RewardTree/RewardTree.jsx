import React, { useEffect, useState, useMemo } from 'react';

const Leaf = ({ x, y, size = 30, color = 'green', angle = 0 }) => {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <path
        d="M0,0 Q5,-10 10,-5 Q15,-15 20,-5 Q25,-10 30,0 Q15,15 0,0"
        fill={color}
        transform={`scale(${size / 30})`}
        className="transition-all duration-500 ease-in-out hover:fill-green-300 hover:scale-110"
        filter="url(#leafShadow)"
      />
    </g>
  );
};

const Branch = ({ startX, startY, endX, endY, thickness, color }) => {
  // Calculate control points for a natural curve
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const controlX = midX + (Math.random() * 20 - 10);
  const controlY = midY + (Math.random() * 10 - 5);

  return (
    <path
      d={`M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`}
      stroke={color}
      strokeWidth={thickness}
      strokeLinecap="round"
      fill="none"
      className="transition-all duration-300"
    />
  );
};

const generateBranches = (trunkColor, depth = 3, trunkWidth = 14) => {
  const branches = [];
  
  // Main trunk points
  const trunkPoints = [
    { x: 200, y: 350 }, // Base
    { x: 200, y: 280 },
    { x: 195, y: 210 },
    { x: 200, y: 140 },
    { x: 200, y: 80 }   // Top
  ];
  
  // Add main trunk
  for (let i = 0; i < trunkPoints.length - 1; i++) {
    branches.push(
      <Branch
        key={`trunk-${i}`}
        startX={trunkPoints[i].x}
        startY={trunkPoints[i].y}
        endX={trunkPoints[i+1].x}
        endY={trunkPoints[i+1].y}
        thickness={trunkWidth - i * 2}
        color={trunkColor}
      />
    );
  }
  
  // Generate branches at different levels
  const branchLevels = [
    { y: 140, count: 3, length: 80, width: 6 },
    { y: 180, count: 3, length: 100, width: 8 },
    { y: 240, count: 2, length: 60, width: 10 }
  ];
  
  let branchId = 0;
  branchLevels.forEach(level => {
    // Left branches
    for (let i = 0; i < level.count; i++) {
      const angle = (30 + i * 15) * (Math.PI / 180);
      const endX = 200 - Math.cos(angle) * level.length;
      const endY = level.y - Math.sin(angle) * level.length;
      
      branches.push(
        <Branch
          key={`branch-l-${branchId}`}
          startX={200}
          startY={level.y}
          endX={endX}
          endY={endY}
          thickness={level.width}
          color={trunkColor}
        />
      );
      branchId++;
    }
    
    // Right branches
    for (let i = 0; i < level.count; i++) {
      const angle = (30 + i * 15) * (Math.PI / 180);
      const endX = 200 + Math.cos(angle) * level.length;
      const endY = level.y - Math.sin(angle) * level.length;
      
      branches.push(
        <Branch
          key={`branch-r-${branchId}`}
          startX={200}
          startY={level.y}
          endX={endX}
          endY={endY}
          thickness={level.width}
          color={trunkColor}
        />
      );
      branchId++;
    }
  });
  
  return branches;
};

const DetailedTree = ({ 
  width = 400, 
  height = 400, 
  trunkColor = '#8B5A2B',
  completedTasks = 0,
  maxLeaves = 500
}) => {
  // Calculate what percentage of max leaves have been earned
  const leafPercentage = Math.min(completedTasks / maxLeaves, 1);
  
  // Generate strategic leaf positions that follow the branches
  const generateLeafPositions = (count) => {
    const positions = [];
    
    // Create areas where we want leaves to appear (around branches)
    const leafAreas = [
      // Top area
      { x: 200, y: 80, radius: 80, weight: 0.3 },
      // Middle left
      { x: 140, y: 140, radius: 60, weight: 0.2 },
      // Middle right
      { x: 260, y: 140, radius: 60, weight: 0.2 },
      // Lower left
      { x: 130, y: 200, radius: 50, weight: 0.15 },
      // Lower right
      { x: 270, y: 200, radius: 50, weight: 0.15 }
    ];
    
    for (let i = 0; i < count; i++) {
      // Select an area based on weight
      const randomVal = Math.random();
      let cumulativeWeight = 0;
      let selectedArea;
      
      for (const area of leafAreas) {
        cumulativeWeight += area.weight;
        if (randomVal <= cumulativeWeight) {
          selectedArea = area;
          break;
        }
      }
      
      if (!selectedArea) selectedArea = leafAreas[0];
      
      // Generate a position within the selected area
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * selectedArea.radius;
      
      positions.push({
        x: selectedArea.x + Math.cos(angle) * distance,
        y: selectedArea.y + Math.sin(angle) * distance,
        size: 20 + Math.random() * 15,
        angle: Math.random() * 360,
        color: `hsl(${110 + Math.random() * 30}, ${60 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`,
        animationDelay: i * 0.05
      });
    }
    
    return positions;
  };

  // Calculate how many leaves to show based on completed tasks
  const leafCount = Math.ceil(completedTasks);
  const leafPositions = useMemo(() => generateLeafPositions(maxLeaves), [maxLeaves]);
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 400" 
      className="tree-container mx-auto"
    >
      {/* Definitions for filters and gradients */}
      <defs>
        <radialGradient id="groundGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#654321" />
        </radialGradient>
        
        <filter id="leafShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
        </filter>
        
        <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`${trunkColor}`} />
          <stop offset="50%" stopColor={`${trunkColor}`} stopOpacity="1" />
          <stop offset="100%" stopColor={`${trunkColor}`} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      {/* Sky background */}
      <rect x="0" y="0" width="400" height="350" fill="#E6F7FF" opacity="0.5" />
      
      {/* Ground with better shading */}
      <ellipse
        cx="200"
        cy="350"
        rx="150"
        ry="30"
        fill="url(#groundGradient)"
        className="shadow-lg"
      />
      
      {/* Grass details */}
      {Array(20).fill().map((_, i) => (
        <path
          key={`grass-${i}`}
          d={`M${120 + i * 10},350 Q${125 + i * 10},340 ${130 + i * 10},350`}
          stroke="#4B7F52"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}
      
      {/* Tree Branches */}
      {generateBranches(trunkColor)}
      
      {/* Dynamically generated leaves with staggered entrance */}
      {leafPositions.slice(0, leafCount).map((pos, index) => (
        <Leaf
          key={index}
          x={pos.x}
          y={pos.y}
          size={pos.size}
          angle={pos.angle}
          color={pos.color}
        />
      ))}
    </svg>
  );
};

export default function InteractiveTree() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [treeGrowth, setTreeGrowth] = useState(0);
  const maxTasks = 500;
  
  useEffect(() => {
    const totalOverAllScore = Number(localStorage.getItem('totalScore')) || 0;
    setCompletedTasks(totalOverAllScore);
    
    // Animated growth effect
    const timer = setTimeout(() => {
      setTreeGrowth(totalOverAllScore);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCompleteTask = () => {
    const newCount = completedTasks + 1;
    setCompletedTasks(newCount);
    localStorage.setItem('totalScore', newCount);
    setTimeout(() => setTreeGrowth(newCount), 100);
  };

  const progressPercentage = (completedTasks / maxTasks) * 100;

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-b from-blue-50 to-green-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">Your Growth Tree</h1>
      
      <div className="relative">
        <DetailedTree 
          width={400} 
          height={400} 
          trunkColor="#8B5A2B" 
          completedTasks={treeGrowth}
          maxLeaves={maxTasks}
        />
        
        {/* Sun */}
        <div className="absolute top-10 right-16">
          <div className="w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-center w-full max-w-md">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-lg font-semibold mb-4 text-gray-700">
          Tasks Completed: <span className="text-green-600">{completedTasks}</span> of {maxTasks}
        </p>
        
        
      </div>
    </div>
  );
}