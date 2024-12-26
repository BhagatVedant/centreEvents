import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ title, date, venue, description, tags, eventId }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-saffron-100 transition-all duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ul className="text-gray-700 text-base mb-2">
          <li>
            <strong>Date:</strong> {date}
          </li>
          <li>
            <strong>Venue:</strong> {venue}
          </li>
        </ul>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-oxford_blue-500 text-white py-1 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/events/${eventId}`} className="text-zaffre-500 font-semibold hover:text-zaffre-600">
          View Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
