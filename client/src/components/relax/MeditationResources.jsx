/*
import React, { useState, useRef, useEffect } from 'react';

const MeditationResources = () => {
  const resources = [
    {
      type: 'article',
      title: 'Mindfulness Meditation: Benefits and Techniques',
      link: 'https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health',
      gifLink: 'https://skyogafoundation.org/assets/images/silence.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: '16 Benefits of Yoga That Are Supported by Science',
      link: 'https://www.healthline.com/nutrition/13-benefits-of-yoga',
      gifLink: 'https://media2.giphy.com/media/lSodnhEO8lphSsxEUy/giphy.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
      gifLink: 'https://media2.giphy.com/media/0YLKvc5TheGFh0GJXk/giphy.gif?cid=6c09b952qk938cnspzz9y9uizfrkj2pf750f3dvpmvpmag4p&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'Meditation for Slowing Thoughts',
      link: 'https://www.youtube.com/watch?v=79r4jlECyTs',
      gifLink: 'https://media4.giphy.com/media/Mb42X7rqa0H7YlJsiz/source.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.yogajournal.com/poses/yoga-by-benefit/calm/yoga-poses-for-relaxation/',
      gifLink: 'https://ub24news.com/wp-content/uploads/2019/06/source-min.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: '8 Simple Exercises for Stress Relief',
      link: 'https://www.everydayhealth.com/exercise-photos/exercises-that-relieve-stress.aspx',
      gifLink: 'https://d2f8l4t0zpiyim.cloudfront.net/000_clients/61768/page/61768yYxIEAka.gif',
      category: 'exercise'
    },
    {
      type: 'article',
      title: 'How Yoga Boosts Your Mental Health',
      link: 'https://www.houstonmethodist.org/blog/articles/2021/sep/the-benefits-of-yoga-how-it-boosts-your-mental-health/',
      gifLink: 'https://media4.giphy.com/media/KDICL3psaxnoeUghMt/giphy.gif?cid=6c09b9525f4v3rtu08oa8spjfefqfmvdbxvlwsnvdzj8h5a1&ep=v1_stickers_related&rid=giphy.gif&ct=s',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'How Meditation strengthens Mental Health',
      link: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response/?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4mc1N99ys4yWNA0XO_7kpg4jUEvAREYIDKA3dB70XgtSkbWwBA-BpsaAumVEALw_wcB',
      gifLink: 'https://media1.giphy.com/media/19ukzJdtWrkV2dy2eE/source.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: 'Does Daily Meditation Really Help in Mental Health?',
      link: 'https://www.outlookindia.com/healths/world-mental-health-day-how-does-daily-meditation-really-help-us--news-219648',
      gifLink: 'https://media2.giphy.com/media/GD32HNX7JduZBfHIdZ/giphy.gif',
      category: 'meditation'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const categories = ['all', 'meditation', 'yoga', 'exercise'];

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
      return () => sliderElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-emerald-50 py-12 px-4 rounded-xl shadow-md max-w-6xl mx-auto mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Meditation, Yoga, Exercises and more...</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore resources to help you find calm, balance, and inner peace.</p>
      </div>

      <div className="flex justify-center mb-6 space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300"
          style={{ marginLeft: '-12px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div 
          ref={sliderRef}
          className="resource-slider flex overflow-x-auto pb-4 hide-scrollbar space-x-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredResources.map((resource, index) => (
            <div 
              key={index} 
              className="resource-card flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={resource.gifLink} 
                    alt={resource.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full mb-2">
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                  <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">{resource.title}</h4>
                  <p className="text-xs text-gray-500">Click to explore</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300"
          style={{ marginRight: '-12px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <div className="bg-gray-200 rounded-full h-1 w-32">
          <div 
            className="bg-emerald-600 h-1 rounded-full" 
            style={{ 
              width: `${Math.min(100, (scrollPosition / (sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth || 1)) * 100)}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MeditationResources;
*/


import React, { useState, useRef, useEffect } from 'react';

const MeditationResources = () => {
  const resources = [
    {
      type: 'article',
      title: 'Mindfulness Meditation: Benefits and Techniques',
      link: 'https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health',
      gifLink: 'https://skyogafoundation.org/assets/images/silence.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: '16 Benefits of Yoga That Are Supported by Science',
      link: 'https://www.healthline.com/nutrition/13-benefits-of-yoga',
      gifLink: 'https://media2.giphy.com/media/lSodnhEO8lphSsxEUy/giphy.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
      gifLink: 'https://media2.giphy.com/media/0YLKvc5TheGFh0GJXk/giphy.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'Meditation for Slowing Thoughts',
      link: 'https://www.youtube.com/watch?v=79r4jlECyTs',
      gifLink: 'https://media4.giphy.com/media/Mb42X7rqa0H7YlJsiz/source.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.yogajournal.com/poses/yoga-by-benefit/calm/yoga-poses-for-relaxation/',
      gifLink: 'https://ub24news.com/wp-content/uploads/2019/06/source-min.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: '8 Simple Exercises for Stress Relief',
      link: 'https://www.everydayhealth.com/exercise-photos/exercises-that-relieve-stress.aspx',
      gifLink: 'https://d2f8l4t0zpiyim.cloudfront.net/000_clients/61768/page/61768yYxIEAka.gif',
      category: 'exercise'
    },
    {
      type: 'article',
      title: 'How Yoga Boosts Your Mental Health',
      link: 'https://www.houstonmethodist.org/blog/articles/2021/sep/the-benefits-of-yoga-how-it-boosts-your-mental-health/',
      gifLink: 'https://media4.giphy.com/media/KDICL3psaxnoeUghMt/giphy.gif',
      category: 'yoga'
    },
    {
      type: 'article',
      title: 'How Meditation strengthens Mental Health',
      link: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response',
      gifLink: 'https://media1.giphy.com/media/19ukzJdtWrkV2dy2eE/source.gif',
      category: 'meditation'
    },
    {
      type: 'article',
      title: 'Does Daily Meditation Really Help in Mental Health?',
      link: 'https://www.outlookindia.com/healths/world-mental-health-day-how-does-daily-meditation-really-help-us--news-219648',
      gifLink: 'https://media2.giphy.com/media/GD32HNX7JduZBfHIdZ/giphy.gif',
      category: 'meditation'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const categories = ['all', 'meditation', 'yoga', 'exercise'];

  const filteredResources =
    selectedCategory === 'all'
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };
    const el = sliderRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const progressPercent = sliderRef.current
    ? (scrollPosition / (sliderRef.current.scrollWidth - sliderRef.current.clientWidth)) * 100
    : 0;

  return (
    <div className="bg-emerald-50 py-12 px-4 rounded-xl shadow-md max-w-6xl mx-auto mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Meditation, Yoga, Exercises and more...</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore resources to help you find calm, balance, and inner peace.</p>
      </div>

      <div className="flex justify-center mb-6 space-x-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700"
          style={{ marginLeft: '-12px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
        >
          {filteredResources.map((res, idx) => (
            <div
              key={idx}
              className="w-64 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <a href={res.link} target="_blank" rel="noopener noreferrer">
                <div className="h-40 overflow-hidden">
                  <img src={res.gifLink} alt={res.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full inline-block mb-2">
                    {res.category.charAt(0).toUpperCase() + res.category.slice(1)}
                  </span>
                  <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">{res.title}</h4>
                  <p className="text-xs text-gray-500">Click to explore</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700"
          style={{ marginRight: '-12px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <div className="bg-gray-200 rounded-full h-1 w-32 overflow-hidden">
          <div
            className="bg-emerald-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, progressPercent)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MeditationResources;
