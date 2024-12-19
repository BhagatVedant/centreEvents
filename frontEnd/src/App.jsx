import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/home';
import Login from './pages/login';
import User from './pages/userHome';
import About from './pages/about';
import EventDetails from './pages/eventDetails';
import ClubPage from './pages/clubPage';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/clubs/:clubName" element={<ClubPage />} />
      </Routes>
    </div>
  );
}

export default App;