import React, { useState, useEffect } from 'react';

const SleepStories = () => {
  const [videoList, setVideoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videosPerPage = 3;

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        setIsLoading(true);
        const youtubeApiKey = 'AIzaSyDuWSva2fdNUgxPP_T4ekzvN0vv9-jdyrk';
        const playlistId = 'PLZoDGrriQgsLsklfcYf0U0FgHBWzJrfAI';
        const maxResults = 20;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${youtubeApiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videos = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url,
          description: item.snippet.description,
        }));

        setVideoList(videos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Unable to load sleep stories. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchVideosData();
  }, []);

  const pageCount = Math.ceil(videoList.length / videosPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const displayedVideos = videoList.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  return (
    <div className="bg-blue-50 py-12 px-4 rounded-xl shadow-md max-w-6xl mx-auto mt-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">SleepTime Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Relax and drift into peaceful sleep with our collection of calming sleep stories.</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedVideos.map(video => (
              <div 
                key={video.id} 
                className="video-card bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-56 md:h-48 lg:h-56"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      frameBorder="0"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-light text-sm">{video.description?.substring(0, 100)}...</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                      </svg>
                    </span>
                    <span className="ml-1 text-sm text-gray-500">Sleep Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={handlePrevPage}
                className="flex items-center px-4 py-2 border border-blue-300 text-blue-700 bg-white rounded-md hover:bg-blue-50 transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="text-gray-600">
                Page {currentPage + 1} of {pageCount}
              </div>
              
              <button 
                onClick={handleNextPage}
                className="flex items-center px-4 py-2 border border-blue-300 text-blue-700 bg-white rounded-md hover:bg-blue-50 transition duration-150"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SleepStories;