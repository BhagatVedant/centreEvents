import React from "react";
import "../styles/style.css"; // Make sure this path is correct

const EventCard = ({ title, description, date, time, venue, tags, image }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl">
      <div className="event-card-content p-6">
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
      <div className="event-card-image">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default EventCard;