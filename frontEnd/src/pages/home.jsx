import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/eventCard";
import logo from "../assets/logo.png";
import cookingClassImage from "../assets/cookingClass.jpeg";
import pirateClubImage from "../assets/pirateClub.jpeg";
import environmentalImage from "../assets/environmental.jpeg";
import boardgameImage from "../assets/boardgame.jpeg";
import filmImage from "../assets/film.jpeg";
import meditationImage from "../assets/meditation.jpeg";
import yogaImage from "../assets/yoga.jpeg";
import codingImage from "../assets/coding.jpeg";
import danceImage from "../assets/dance.jpeg";
import robotImage from "../assets/robot.jpeg";
import scienceImage from "../assets/science.jpeg";
import languageImage from "../assets/language.jpeg";
import gardeningImage from "../assets/gardening.jpeg";
import dramaImage from "../assets/drama.jpeg";
import musicImage from "../assets/music.jpeg";
import fitnessImage from "../assets/fitness.jpeg";
import photographyImage from "../assets/photography.jpeg";
import techImage from "../assets/tech.jpeg";
import artImage from "../assets/art.jpeg";
import chessImage from "../assets/chess.jpeg";
import bookImage from "../assets/book.jpeg";
import astronomyImage from "../assets/astronomy.jpeg";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    // Fetch events from the backend
    axios
      .get("http://localhost:5000/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);z
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "CLUB" && event.type === "club") return true;
    if (selectedCategory === "CONVOS" && event.type === "convocation") return true;
    return false;
  });

  const getImage = (title) => {
    switch (title) {
      case "Pirates Club Meeting":
        return pirateClubImage;
      case "Cooking Class":
        return cookingClassImage;
      case "Astronomy Night":
        return astronomyImage;
      case "Book Club Meeting":
        return bookImage;
      case "Chess Tournament":
        return chessImage;
      case "Art Exhibition":
        return artImage;
      case "Tech Talk":
        return techImage;
      case "Photography Walk":
        return photographyImage;
      case "Fitness Bootcamp":
        return fitnessImage;
      case "Music Jam Session":
        return musicImage;
      case "Drama Rehearsal":
        return dramaImage;
      case "Gardening Workshop":
        return gardeningImage;
      case "Language Exchange":
        return languageImage;
      case "Science Fair":
        return scienceImage;
      case "Robotics Workshop":
        return robotImage;
      case "Dance Practice":
        return danceImage;
      case "Coding Hackathon":
        return codingImage;
      case "Yoga Class":
        return yogaImage;
      case "Environmental Cleanup":
        return environmentalImage;
      case "Meditation Session":
        return meditationImage;
      case "Film Screening":
        return filmImage;
      case "Board Game Night":
        return boardgameImage;
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-oxford_blue">
      {/* Logo Section */}
      <div className="flex justify-center items-center bg-saffron">
        <img
          src={logo}
          alt="CentreEvents Logo"
          className="max-w-full max-h-[80vh] md:max-h-[60vh] object-contain p-4 shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Scroll Down Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-anti-flash_white mb-6">Here’s What’s Coming</h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => handleCategoryChange("ALL")}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === "ALL" ? "border-saffron text-saffron" : "border-transparent text-anti-flash_white"}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("CLUB")}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === "CLUB" ? "border-saffron text-saffron" : "border-transparent text-anti-flash_white"}`}
          >
            Club
          </button>
          <button
            onClick={() => handleCategoryChange("CONVOS")}
            className={`py-2 px-6 rounded-full border-2 ${selectedCategory === "CONVOS" ? "border-saffron text-saffron" : "border-transparent text-anti-flash_white"}`}
          >
            Convos
          </button>
        </div>

        {/* Line Under Selected Button */}
        <div className={`h-1 w-1/4 mx-auto ${selectedCategory === "ALL" ? "bg-saffron" : selectedCategory === "CLUB" ? "bg-saffron" : "bg-saffron"}`} />
      </div>

      {/* Filtered Events Section */}
      <div className="px-8">
        {filteredEvents.length > 0 ? (
          <div className="event-cards-container">
            {filteredEvents.map((event) => (
              <EventCard 
                key={event.eventId} 
                title={event.title} 
                date={event.date} 
                time={event.time} 
                venue={event.venue} 
                description={event.description} 
                tags={event.tags} 
                image={getImage(event.title)}
              />
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