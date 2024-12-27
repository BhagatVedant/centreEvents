import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-oxford_blue p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-semibold hover:text-saffron transition duration-300">centreEvents</Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-white text-lg hover:text-saffron transition duration-300">Home</Link>
          <Link to="/about" className="text-white text-lg hover:text-saffron transition duration-300">About</Link>
          <Link to="/login" className="text-white text-lg hover:text-saffron transition duration-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;