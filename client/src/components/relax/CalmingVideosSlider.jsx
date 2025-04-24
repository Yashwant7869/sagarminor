/*
import React, { useState, useEffect } from 'react';

const CalmingVideosSlider = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const apiKey = 'AIzaSyApVeK3cmd63M7u-bh1MCKm-UwXRHfoQec'; 
        const playlistId = 'PLQ_PIlf6OzqKdBTuABBCzazB4i732pNTa';
        const maxResults = 20;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videoItems = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url,
        }));

        setVideos(videoItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  // Display visible videos (current + 2 more)
  const getVisibleVideos = () => {
    if (videos.length === 0) return [];
    
    const visibleVideos = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videos.length;
      visibleVideos.push(videos[index]);
    }
    return visibleVideos;
  };

  return (
    <div className="bg-gray-50 py-12 px-4 rounded-xl shadow-md max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Calming Videos</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4">{error}</div>
      ) : (
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevSlide}
              className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="video-container grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleVideos().map((video, index) => (
              <div 
                key={video.id} 
                className="video-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-64 md:h-56 lg:h-64"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 truncate">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  Math.floor(idx / 3) === Math.floor(currentIndex / 3) ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalmingVideosSlider;
*/

import React, { useState, useEffect } from 'react';

const CalmingVideosSlider = ({ onVideoSelect }) => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const apiKey = 'AIzaSyApVeK3cmd63M7u-bh1MCKm-UwXRHfoQec'; /* Add your own API Key */
        const playlistId = 'PLQ_PIlf6OzqKdBTuABBCzazB4i732pNTa';
        const maxResults = 20;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videoItems = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url,
        }));

        setVideos(videoItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const getVisibleVideos = () => {
    if (videos.length === 0) return [];
    const visibleVideos = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videos.length;
      visibleVideos.push(videos[index]);
    }
    return visibleVideos;
  };

  const handleVideoClick = (videoId) => {
    if (onVideoSelect) onVideoSelect();
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="bg-gray-50 py-12 px-4 rounded-xl shadow-md max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Calming Videos</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4">{error}</div>
      ) : (
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevSlide}
              className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="video-container grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleVideos().map((video) => (
              <div 
                key={video.id} 
                className="video-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 md:h-56 lg:h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 truncate">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  Math.floor(idx / 3) === Math.floor(currentIndex / 3) ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalmingVideosSlider;
