import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-oxford_blue-500 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-semibold">centreEvents</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-saffron">Home</Link>
          <Link to="/about" className="text-white hover:text-saffron">About</Link>
          <Link to="/login" className="text-white hover:text-saffron">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
