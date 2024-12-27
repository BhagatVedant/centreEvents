import React from "react";
import "../styles/style.css"; // Make sure to import your CSS file

const EventCard = ({ title, description, date, time, venue, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full md:w-1/2 lg:w-1/3 mx-auto transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {date}</p>
      <p className="text-gray-700 mb-2"><strong>Time:</strong> {time}</p>
      <p className="text-gray-700 mb-2"><strong>Venue:</strong> {venue}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-saffron text-white text-sm font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventCard;