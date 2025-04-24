/*
import React, { useState, useEffect } from 'react';
import CalmingVideosSlider from './CalmingVideosSlider';
import MeditationResources from './MeditationResources';

const Relax = () => {
  const [showSleepStories, setShowSleepStories] = useState(false);
  const [activeTab, setActiveTab] = useState('calming');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleSleepStories = () => {
    setShowSleepStories(!showSleepStories);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-indigo-800 font-medium">Loading your relaxation content...</p>
        </div>
      ) : (
        <>
         
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Inner Peace</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Explore our collection of relaxation resources to help you unwind, destress, and find balance.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a 
                  href="#calming-videos" 
                  onClick={() => setActiveTab('calming')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === 'calming' 
                      ? 'bg-white text-indigo-700 shadow-lg' 
                      : 'bg-indigo-700/30 text-white hover:bg-indigo-700/50'
                  }`}
                >
                  Calming Videos
                </a>
                <a 
                  href="#meditation" 
                  onClick={() => setActiveTab('meditation')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === 'meditation' 
                      ? 'bg-white text-indigo-700 shadow-lg' 
                      : 'bg-indigo-700/30 text-white hover:bg-indigo-700/50'
                  }`}
                >
                  Meditation Resources
                </a>
              </div>
            </div>
          </div>

        
          <div className="max-w-7xl mx-auto px-4 py-12">
         
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to MindsCool Relaxation</h2>
              <p className="text-lg text-gray-600">
                In today's fast-paced world, taking time to relax and recharge is essential for your mental wellbeing. 
                Our curated collection of videos, stories, and resources are designed to help you pause, 
                breathe, and find moments of tranquility throughout your day.
              </p>
            </div>
            
           
            <section id="calming-videos" className="mb-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-indigo-800">Calming Videos</h2>
                  <p className="text-gray-600 mt-2">Relax your mind with these soothing visual experiences</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    View all videos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <CalmingVideosSlider />
            </section>
            
          
            
     
            <section id="meditation" className="mb-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-emerald-800">Meditation Resources</h2>
                  <p className="text-gray-600 mt-2">Tools and guides to help you find your center</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center">
                    Browse all resources
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <MeditationResources />
            </section>
            
          
            <section className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Regular Relaxation</h2>
                <p className="text-lg text-gray-600">
                  Taking time to relax isn't just about feeling good—it's essential for your overall health and wellbeing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Reduced Stress</h3>
                  <p className="text-gray-600">
                    Regular relaxation activates your body's relaxation response, reducing stress hormones and promoting calmness.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Better Sleep</h3>
                  <p className="text-gray-600">
                    Practicing relaxation techniques before bed can help you fall asleep faster and experience deeper, more restorative sleep.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Improved Focus</h3>
                  <p className="text-gray-600">
                    Regular meditation and relaxation practices can enhance your attention span, concentration, and mental clarity.
                  </p>
                </div>
              </div>
            </section>
            
          
            <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Relaxation Journey Today</h2>
                  <p className="text-indigo-100">
                    Take the first step toward a calmer mind and more balanced life. Explore our resources and make relaxation a daily habit.
                  </p>
                </div>
                <div>
                  <button 
                  className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition-colors shadow-md"
                  onClick={() => window.location.href = "/login"}
                  >
                    Create Free Account
                  </button>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Relax;
*/

import React, { useState, useEffect } from 'react';
import CalmingVideosSlider from './CalmingVideosSlider';
import MeditationResources from './MeditationResources';

const Relax = () => {
  const [showSleepStories, setShowSleepStories] = useState(false);
  const [activeTab, setActiveTab] = useState('calming');
  const [isLoading, setIsLoading] = useState(true);
  const [leaves, setLeaves] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Load state from localStorage on first render
  useEffect(() => {
    const savedLeaves = localStorage.getItem('leaves');
    const savedTotalScore = localStorage.getItem('totalScore');

    if (savedLeaves) setLeaves(Number(savedLeaves));
    if (savedTotalScore) setTotalScore(Number(savedTotalScore));
  }, []);

  // Handler for when a resource is viewed/interacted with
  const handleResourceSelect = () => {
    const updatedLeaves = leaves + 1;
    setLeaves(updatedLeaves);
    setTotalScore(updatedLeaves);
    localStorage.setItem('leaves', updatedLeaves);
    localStorage.setItem('totalScore', updatedLeaves);
  };

  const toggleSleepStories = () => {
    setShowSleepStories(!showSleepStories);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-indigo-800 font-medium">Loading your relaxation content...</p>
        </div>
      ) : (
        <>
          {/* Hero Section, Tabs, and Main Content Here (unchanged) */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Inner Peace</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Explore our collection of relaxation resources to help you unwind, destress, and find balance.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a 
                  href="#calming-videos" 
                  onClick={() => setActiveTab('calming')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === 'calming' 
                      ? 'bg-white text-indigo-700 shadow-lg' 
                      : 'bg-indigo-700/30 text-white hover:bg-indigo-700/50'
                  }`}
                >
                  Calming Videos
                </a>
                <a 
                  href="#meditation" 
                  onClick={() => setActiveTab('meditation')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === 'meditation' 
                      ? 'bg-white text-indigo-700 shadow-lg' 
                      : 'bg-indigo-700/30 text-white hover:bg-indigo-700/50'
                  }`}
                >
                  Meditation Resources
                </a>
              </div>
            </div>
          </div>

          {/* Wrap the sliders/resources with the interaction handler */}
          <section id="calming-videos" className="mb-20">
            {/* Section Heading */}
            <CalmingVideosSlider onVideoSelect={handleResourceSelect} />
          </section>

          <section id="meditation" className="mb-20">
            {/* Section Heading */}
            <MeditationResources onResourceSelect={handleResourceSelect} />
          </section>
        </>
      )}
    </div>
  );
};

export default Relax;



