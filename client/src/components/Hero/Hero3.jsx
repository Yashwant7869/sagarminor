import React, { useState, useEffect } from 'react';

const FAQPage = () => {
  // FAQ categories
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'account', name: 'Account' },
    { id: 'services', name: 'Services' },
    { id: 'support', name: 'Support' }
  ];

  // FAQ items data with categories
  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: "What is the purpose of this platform?",
      answer: "This platform aims to provide comprehensive support and resources for managing and improving mental health, promoting everyday wellness, and fostering resilience through personalized guidance and community support."
    },
    {
      id: 2,
      category: 'support',
      question: "How can I reach out for help?",
      answer: "You can seek help through our Contact Page or by directly reaching out to us via email or phone for guidance on mental wellness. Our support team is available 24/7 to assist you with any concerns."
    },
    {
      id: 3,
      category: 'account',
      question: "How do I reset my password?",
      answer: "To reset your password, go to the Login Page and click on the \"Forgot Password\" link to receive reset instructions via email. For security purposes, the reset link will expire after 24 hours."
    },
    {
      id: 4,
      category: 'support',
      question: "Who can I contact for additional support?",
      answer: "If you need further assistance, please use the contact form on our Contact Page or email us directly at optimus@gmail.com. Our dedicated support team will respond within 24 hours."
    },
    {
      id: 5,
      category: 'general',
      question: "Is my information kept confidential?",
      answer: "Yes, all your personal information and interactions on our platform are strictly confidential. We follow industry-standard security practices and encryption protocols to protect your data from unauthorized access."
    },
    {
      id: 6,
      category: 'services',
      question: "Can I schedule an appointment online?",
      answer: "Yes, you can schedule appointments through our intuitive online booking system. Simply navigate to the Appointments page, select your preferred date and time, and confirm your booking with just a few clicks."
    },
    {
      id: 7,
      category: 'services',
      question: "What types of services do you offer?",
      answer: "We offer a wide range of services including individual counseling, group therapy sessions, wellness workshops, mindfulness training, and crisis intervention. Our services are designed to cater to diverse needs and preferences."
    },
    {
      id: 8,
      category: 'account',
      question: "How do I update my profile information?",
      answer: "You can update your profile information by logging into your account, navigating to the 'Profile Settings' section, and making the necessary changes. Remember to save your changes before exiting."
    }
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [openItem, setOpenItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter FAQ items based on search term and active category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ item open/close with animation
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
    
    // Add item to animated items array
    if (!animatedItems.includes(id)) {
      setAnimatedItems([...animatedItems, id]);
    }
  };

  // Staggered animation on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(faqItems.map(item => item.id));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section with Animated Gradient */}
        <div className="relative mb-16 overflow-hidden rounded-3xl shadow-xl bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQxLjUgMGgzMjl2MzI5SC0xODcuNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] bg-center opacity-10"></div>
          <div className="relative py-16 px-8 md:px-16 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">Find answers to common questions about our platform, services, and support options.</p>
            
            {/* Advanced Search Bar */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
                <input 
                  type="text" 
                  placeholder="" 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full bg-white/20 backdrop-blur-md text-white placeholder-blue-200 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
                />
                <svg 
                  className="w-6 h-6 text-blue-200 absolute left-4 top-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Animated Wave Effect */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-20">
              <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,181.3C672,181,768,171,864,181.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide justify-center">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-blue-50'
              }`}
            >
              All Questions
            </button>
            
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div 
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                  animatedItems.includes(item.id) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(item.id % 8) * 100}ms` }}
              >
                <div 
                  className={`border-l-4 ${
                    item.category === 'general' ? 'border-blue-500' :
                    item.category === 'account' ? 'border-purple-500' :
                    item.category === 'services' ? 'border-green-500' :
                    'border-orange-500'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none group"
                  >
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.question}</h2>
                    <span className={`ml-4 flex-shrink-0 p-2 rounded-full ${
                      openItem === item.id ? 'bg-blue-100' : 'bg-gray-100'
                    } transition-colors`}>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openItem === item.id ? 'transform rotate-180 text-blue-600' : 'text-gray-500'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${
                      openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer.includes('optimus@gmail.com') ? (
                          <>
                            {item.answer.split('optimus@gmail.com')[0]}
                            <a 
                              href="mailto:optimus@gmail.com" 
                              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                            >
                              optimus@gmail.com
                            </a>
                            {item.answer.split('optimus@gmail.com')[1]}
                          </>
                        ) : (
                          item.answer
                        )}
                      </p>
                      <div className="mt-4 flex items-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          item.category === 'general' ? 'text-blue-800 bg-blue-100' :
                          item.category === 'account' ? 'text-purple-800 bg-purple-100' :
                          item.category === 'services' ? 'text-green-800 bg-green-100' :
                          'text-orange-800 bg-orange-100'
                        }`}>
                          {categories.find(cat => cat.id === item.category)?.name}
                        </span>
                        <button className="ml-auto text-sm text-blue-600 hover:text-blue-800 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                          Helpful
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 bg-white rounded-xl shadow-lg p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mt-4">No results found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Contact Call to Action */}
        <div className="mt-16 relative">
          <div className="relative bg-gradient-to-br from-indigo-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjMwMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] bg-center opacity-20 animate-pulse"></div>
            <div className="relative px-8 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
                <p className="text-blue-100 text-lg max-w-xl">Our dedicated support team is ready to assist you with any questions or concerns. We're just a click away.</p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">100+</div>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">97%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">50k+</div>
            <p className="text-gray-600">Happy Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;