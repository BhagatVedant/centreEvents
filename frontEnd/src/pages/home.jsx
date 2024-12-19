import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png'; // Update with your logo path

const Home = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    // Fetch events from the backend
    axios.get('http://localhost:5000/api/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = events.filter(event => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'CLUB' && event.tags.includes('club')) return true;
    if (selectedCategory === 'CONVOS' && event.tags.includes('convo')) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-oxford_blue">
      {/* Logo Section */}
      <div className="flex justify-center items-center h-screen bg-saffron">
        <img src={logo} alt="CentreEvents Logo" className="max-w-full max-h-[40vh] object-contain" />
      </div>

      {/* Scroll Down Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-anti-flash_white mb-6">Here’s What’s Coming</h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => handleCategoryChange('ALL')}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === 'ALL' ? 'border-saffron text-saffron' : 'border-transparent text-anti-flash_white'}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('CLUB')}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === 'CLUB' ? 'border-saffron text-saffron' : 'border-transparent text-anti-flash_white'}`}
          >
            Club
          </button>
          <button
            onClick={() => handleCategoryChange('CONVOS')}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === 'CONVOS' ? 'border-saffron text-saffron' : 'border-transparent text-anti-flash_white'}`}
          >
            Convos
          </button>
        </div>

        {/* Line Under Selected Button */}
        <div className={`h-1 w-1/4 mx-auto ${selectedCategory === 'ALL' ? 'bg-saffron' : selectedCategory === 'CLUB' ? 'bg-saffron' : 'bg-saffron'}`} />
      </div>

      {/* Filtered Events Section */}
      <div className="px-8">
        {filteredEvents.length > 0 ? (
          <div>
            {filteredEvents.map((event) => (
              <div key={event._id} className="bg-anti-flash_white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-night">{event.title}</h3>
                <p>{event.date} | {event.time} | {event.venue}</p>
                <p className="mt-4">{event.description}</p>
                <div className="mt-4 flex space-x-2">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="bg-oxford_blue text-anti-flash_white py-1 px-3 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-anti-flash_white">No events found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Home;