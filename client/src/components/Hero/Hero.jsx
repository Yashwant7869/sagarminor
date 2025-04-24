// // with rounding cricle in frontend

// import React, { useState, useEffect } from 'react';

// // Create a stylized horizon/surface element instead of using an image
// const StylizedHorizon = () => {
//   return (
//     <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
     
//       <svg 
//         viewBox="0 0 1200 200" 
//         preserveAspectRatio="none" 
//         className="w-full h-48 md:h-60 brightness-50 transform translate-y-4"
//       >
//         <path 
//           d="M0,100 C300,180 900,30 1200,100 L1200,200 L0,200 Z" 
//           fill="#2d3748" 
//         />
//         <path 
//           d="M0,120 C200,150 700,90 1200,120 L1200,200 L0,200 Z" 
//           fill="#1a202c" 
//         />
        
       
//         {Array(10).fill().map((_, i) => (
//           <circle 
//             key={i}
//             cx={100 + i * 120} 
//             cy={150 + (i % 3) * 10} 
//             r={2 + (i % 5) * 2}
//             fill="#4a5568"
//           />
//         ))}
//       </svg>
//     </div>
//   );
// };

// const HeroParticle = ({ index }) => {
//   // Different sizes for particles
//   const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3'];
//   const opacities = ['opacity-20', 'opacity-30', 'opacity-50', 'opacity-70'];
//   const animations = ['animate-pulse', 'animate-bounce', 'animate-ping'];
  
//   return (
//     <div 
//       className={`absolute rounded-full bg-blue-400 ${sizes[index % sizes.length]} ${opacities[index % opacities.length]}`}
//       style={{
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//         animationDuration: `${3 + Math.random() * 4}s`,
//         animationDelay: `${Math.random() * 5}s`,
//         transform: `translateY(${Math.random() * 10}px)`,
//         animation: `pulse ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`
//       }}
//     />
//   );
// };

// // Enhanced rotating circle animation component
// const RotatingCircleAnimation = () => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       {/* Main outer rotating circle */}
//       <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '15s'}}>
//         <circle 
//           cx="50%" 
//           cy="50%" 
//           r="40%" 
//           fill="none" 
//           stroke="rgba(227, 159, 91, 0.3)" 
//           strokeWidth="1"
//           strokeDasharray="10 5"
//         />
//       </svg>
      
//       {/* Second rotating circle in opposite direction */}
//       <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
//         <circle 
//           cx="50%" 
//           cy="50%" 
//           r="35%" 
//           fill="none" 
//           stroke="rgba(227, 159, 91, 0.3)" 
//           strokeWidth="1.5"
//           strokeDasharray="15 10"
//         />
//       </svg>
      
//       {/* Third rotating circle with different pattern */}
//       <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '20s'}}>
//         <circle 
//           cx="50%" 
//           cy="50%" 
//           r="45%" 
//           fill="none" 
//           stroke="rgba(227, 159, 91, 0.3)" 
//           strokeWidth="2"
//           strokeDasharray="5 15"
//           strokeLinecap="round"
//         />
//       </svg>
      
//       {/* Orbital particles */}
//       {Array(8).fill().map((_, i) => (
//         <div 
//           key={i}
//           className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
//           style={{
//             transform: `rotate(${i * 45}deg) translateX(40%) rotate(-${i * 45}deg)`,
//             top: '50%',
//             left: '50%',
//             boxShadow: '0 0 15px 5px rgba(227, 159, 91, 0.3)',
//             animationDuration: `${2 + i * 0.5}s`
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
     
//       <div className="absolute inset-0 z-10">
//         {Array(30).fill().map((_, i) => (
//           <HeroParticle key={i} index={i} />
//         ))}
//       </div>
      
     
//       <div className="relative z-20 h-full flex justify-center items-center px-4 md:px-8">
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
        
//           <div className={`text-white space-y-6 max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//             <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 mb-2">
//               <p className="text-blue-300 text-sm font-medium">Mental Health Awareness</p>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
//               MindSkoon
//             </h1>
            
//             <p className="text-gray-300 text-lg leading-relaxed">
//             MindSkoon is a non-profit movement empowering awareness for mental health. 
//               We help people understand their mental condition and connect with professional help.
//               <span className="block mt-4 text-sm text-blue-200">
//                 This is not a site for personal disclosure of suicidal thoughts or behaviors. 
//                 If you are in crisis, please call 112/911 or go to your nearest emergency department.
//               </span>
//             </p>
            
//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
//                 <span className="relative z-10">GET STARTED</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </button>
              
//               <button className="relative overflow-hidden bg-transparent border border-blue-400 text-blue-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:border-blue-300">
//                 <span className="relative z-10">LEARN MORE</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/30 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </button>
//             </div>
//           </div>
          
//           <div className={`hidden sm:flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//             <div className="relative w-full h-96">
            
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative w-64 h-64 md:w-80 md:h-80">
                  
//                   {/* Add the enhanced rotating circle animation OUTSIDE the central content */}
//                   <RotatingCircleAnimation />
                  
//                   {/* Center content remains mostly the same */}
//                   <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-700/60 backdrop-blur-md border border-blue-300/30 animate-pulse flex items-center justify-center" style={{animationDuration: '6s'}}>
//                     <div className="text-center">
//                       <div className="text-blue-100 font-bold text-lg">Mind Health</div>
//                       <div className="text-blue-200 text-xs">Awareness & Support</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <StylizedHorizon />
      
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900/20 z-15"></div>
//     </div>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from 'react';

// Stylized horizon with reddish theme
const StylizedHorizon = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
      <svg 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none" 
        className="w-full h-48 md:h-60 brightness-50 transform translate-y-4"
      >
        <path 
          d="M0,100 C300,180 900,30 1200,100 L1200,200 L0,200 Z" 
          fill="#7f1d1d" // dark red
        />
        <path 
          d="M0,120 C200,150 700,90 1200,120 L1200,200 L0,200 Z" 
          fill="#450a0a" // darker red
        />
        
        {/* Adding some texture dots with reddish colors */}
        {Array(12).fill().map((_, i) => (
          <circle 
            key={i}
            cx={80 + i * 110} 
            cy={150 + (i % 3) * 10} 
            r={2 + (i % 5) * 2}
            fill="#9f1239"
          />
        ))}
      </svg>
    </div>
  );
};

// Floating particles with reddish theme
const HeroParticle = ({ index }) => {
  const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3'];
  const opacities = ['opacity-20', 'opacity-30', 'opacity-50', 'opacity-70'];
  
  return (
    <div 
      className={`absolute rounded-full bg-red-400 ${sizes[index % sizes.length]} ${opacities[index % opacities.length]}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `translateY(${Math.random() * 10}px)`,
        animation: `pulse ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`
      }}
    />
  );
};

// Enhanced dynamic rotating circles with reddish theme
const RotatingCircleAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Main outer rotating circle */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '15s'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="40%" 
          fill="none" 
          stroke="rgba(248, 113, 113, 0.3)" 
          strokeWidth="1"
          strokeDasharray="10 5"
        />
      </svg>
      
      {/* Second rotating circle in opposite direction */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="35%" 
          fill="none" 
          stroke="rgba(239, 68, 68, 0.3)" 
          strokeWidth="1.5"
          strokeDasharray="15 10"
        />
      </svg>
      
      {/* Third rotating circle with different pattern */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '20s'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="45%" 
          fill="none" 
          stroke="rgba(220, 38, 38, 0.3)" 
          strokeWidth="2"
          strokeDasharray="5 15"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Orbital particles */}
      {Array(8).fill().map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-red-400 rounded-full animate-pulse"
          style={{
            transform: `rotate(${i * 45}deg) translateX(40%) rotate(-${i * 45}deg)`,
            top: '50%',
            left: '50%',
            boxShadow: '0 0 15px 5px rgba(248, 113, 113, 0.4)',
            animationDuration: `${2 + i * 0.5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

// New animated decorative elements
const DecorativeElements = () => {
  return (
    <>
      {/* Top-left corner decorative element */}
      <div className="absolute top-24 left-6 md:left-12 z-10">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <path 
            d="M10,50 Q30,10 50,50 T90,50" 
            fill="none" 
            stroke="rgba(220, 38, 38, 0.4)" 
            strokeWidth="2"
            className="animate-pulse"
            style={{animationDuration: '4s'}}
          />
          <circle cx="50" cy="50" r="5" fill="rgba(248, 113, 113, 0.6)" />
        </svg>
      </div>
      
      {/* Bottom-right corner decorative element */}
      <div className="absolute bottom-24 right-6 md:right-12 z-10">
        <svg width="80" height="80" viewBox="0 0 100 100" className="animate-spin" style={{animationDuration: '20s'}}>
          <polygon 
            points="50,10 61,35 90,35 65,50 75,80 50,65 25,80 35,50 10,35 39,35" 
            fill="none" 
            stroke="rgba(220, 38, 38, 0.3)" 
            strokeWidth="1.5"
          />
        </svg>
      </div>
      
      {/* Pulsing rings in background */}
      <div className="absolute left-1/4 top-1/3 z-5">
        <div className="w-32 h-32 rounded-full border border-red-400/20 animate-ping" style={{animationDuration: '3s'}}></div>
      </div>
      <div className="absolute right-1/4 bottom-1/3 z-5">
        <div className="w-24 h-24 rounded-full border border-red-400/20 animate-ping" style={{animationDuration: '4s'}}></div>
      </div>
    </>
  );
};

// Animated wave for better visual effect
const AnimatedWave = () => {
  return (
    <div className="absolute inset-x-0 top-1/3 z-0 opacity-30">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full">
        <path 
          d="M0,0 C150,40 350,0 500,30 C650,60 750,20 900,40 C1050,60 1200,30 1200,30 V120 H0 Z" 
          fill="rgba(220, 38, 38, 0.2)"
          className="animate-pulse"
          style={{animationDuration: '8s'}}
        />
      </svg>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Particles */}
      <div className="absolute inset-0 z-10">
        {Array(30).fill().map((_, i) => (
          <HeroParticle key={i} index={i} />
        ))}
      </div>
      
      {/* Decorative elements */}
      <DecorativeElements />
      
      {/* Animated wave background */}
      <AnimatedWave />
      
      {/* Content */}
      <div className="relative z-20 h-full flex justify-center items-center px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left content - Text */}
          <div className={`text-white space-y-6 max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-400/30 mb-2">
              <p className="text-red-300 text-sm font-medium">Mental Health Awareness</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              MindSkoon
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              MindSkoon is a non-profit movement empowering awareness for mental health. 
              We help people understand their mental condition and connect with professional help.
              <span className="block mt-4 text-sm text-red-200">
                This is not a site for personal disclosure of suicidal thoughts or behaviors. 
                If you are in crisis, please call 112/911 or go to your nearest emergency department.
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/30">
                <span className="relative z-10">GET STARTED</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
              
              <button className="relative overflow-hidden bg-transparent border border-red-400 text-red-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:border-red-300">
                <span className="relative z-10">LEARN MORE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/30 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
          
          {/* Right content - Animated visual */}
          <div className={`hidden sm:flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-full h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  
                  {/* Add the enhanced rotating circle animation */}
                  <RotatingCircleAnimation />
                  
                  {/* Center content */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-red-500/40 to-red-700/60 backdrop-blur-md border border-red-300/30 animate-pulse flex items-center justify-center overflow-hidden" style={{animationDuration: '6s'}}>
                    {/* Adding an animated pulse effect inside the circle */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-red-500/30 animate-ping" style={{animationDuration: '2s'}}></div>
                    </div>
                    
                    <div className="relative text-center z-10">
                      <div className="text-red-100 font-bold text-lg">Mind Health</div>
                      <div className="text-red-200 text-xs mt-1">Awareness & Support</div>
                      {/* Small animated icon */}
                      <div className="mt-2 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-200 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <StylizedHorizon />
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-red-900/20 z-15"></div>
    </div>
  );
};

export default Hero;