import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();
  // Fetch event details based on eventId or use mock data

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Event Title</h1>
      <ul className="text-lg text-gray-600 my-4">
        <li><strong>Date:</strong> 12th Dec 2024</li>
        <li><strong>Time:</strong> 5:00 PM</li>
        <li><strong>Venue:</strong> Auditorium</li>
      </ul>
      <p className="my-4">A brief description of the event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula venenatis justo, nec varius eros hendrerit eget.</p>
      <div className="flex gap-2 mt-4">
        <span className="text-xs bg-zaffre-500 text-white py-1 px-2 rounded-full">Tag 1</span>
        <span className="text-xs bg-zaffre-500 text-white py-1 px-2 rounded-full">Tag 2</span>
      </div>
    </div>
  );
};

export default EventDetails;