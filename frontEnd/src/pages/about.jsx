import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure to place logo in the correct path

const About = () => {
  return (
    <div className="bg-oxford_blue min-h-screen flex items-center justify-center">
      {/* Container for About Us */}
      <div className="bg-anti-flash_white p-10 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        {/* About Us Title */}
        <h1 className="text-center text-4xl font-bold text-night mb-4">About Us</h1>
        <div className="border-b-4 border-saffron mb-6 w-1/3 mx-auto"></div>
        {/* About Description */}
        <p className="text-lg text-night text-center mb-6">
          CentreEvents is an initiative to bring all clubs and organizations together in one place at our
          college. This platform helps students discover upcoming events, interact with clubs, and stay up to date with what's happening across campus.
        </p>

        {/* Creators Section */}
        <h2 className="text-2xl font-semibold text-night mb-4 text-center">Creators</h2>
        <div className="flex justify-around items-center flex-wrap">
          {/* Vedant Bhagat */}
          <div className="text-center mb-6 md:mb-0">
            <div className="bg-saffron rounded-full p-4 mb-2 mx-auto w-28 h-28 flex items-center justify-center">
              <img src="https://avatars.githubusercontent.com/u/70897139?v=4" alt="Vedant Bhagat" className="rounded-full" />
            </div>
            <h3 className="font-bold text-xl text-night">Vedant Bhagat</h3>
            <p className="text-sm text-night">Does Everything, So cool, Co-Founder</p>
          </div>

          {/* Robert */}
          <div className="text-center mb-6 md:mb-0">
            <div className="bg-saffron rounded-full p-4 mb-2 mx-auto w-28 h-28 flex items-center justify-center">
              <img src="https://avatars.githubusercontent.com/u/150546895?v=4" alt="Robert Nguyen" className="rounded-full" />
            </div>
            <h3 className="font-bold text-xl text-night">Robert Nguyen</h3>
            <p className="text-sm text-night">Bruh, Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;