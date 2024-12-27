import React, { useState } from "react";
import vedantImg from "../assets/vedantBody.png";
import robertImg from "../assets/robertBody.png";
import "../styles/about.css";

const About = () => {
  const [selected, setSelected] = useState(null);

  const founders = {
    vedant: {
      name: "Vedant Bhagat",
      desc: "Placeholder description for Vedant. Add more details here.",
      image: vedantImg,
      links: [
        { name: "GitHub", url: "https://github.com/your-username" },
        { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
      ],
    },
    robert: {
      name: "Robert Nguyen",
      desc: "Placeholder description for Robert. Add more details here.",
      image: robertImg,
      links: [
        { name: "GitHub", url: "https://github.com/another-username" },
        { name: "LinkedIn", url: "https://linkedin.com/in/another-username" },
      ],
    },
  };

  const handleOutsideClick = () => setSelected(null);

  return (
    <div className="relative min-h-screen bg-oxford_blue overflow-hidden text-anti-flash_white">
      {/* Close Button */}
      {selected && (
        <button
          onClick={handleOutsideClick}
          className="absolute top-4 right-4 z-20 text-4xl font-bold hover:scale-110 transition-transform duration-300"
        >
          ✕
        </button>
      )}

      {/* Main Content */}
      <div
        className={`relative flex flex-col items-center w-full p-10 ${
          selected ? "hidden" : ""
        }`}
      >
        <h1 className="text-5xl font-bold text-center mb-6 animate-fade-in">
          CentreEvents
        </h1>
        <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-center text-lg mb-12 max-w-2xl animate-fade-in">
          CentreEvents is your one-stop platform for discovering events and
          engaging with clubs at our college. Stay up to date with everything
          happening across campus!
        </p>

        <div className="relative w-full h-[60vh] flex justify-around items-end">
          {/* Background Lines/Swirls */}
          <div className="absolute top-0 left-20 w-64 h-64 bg-transparent rounded-full border-4 border-dashed border-saffron animate-spin-slow"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-transparent rounded-full border-4 border-dashed border-saffron animate-spin-slow"></div>

          {/* Vedant */}
          <div
            className="cursor-pointer flex flex-col items-center transform hover:scale-110 transition duration-300"
            onClick={() => setSelected("vedant")}
          >
            <img
              src={vedantImg}
              alt="Vedant"
              className="rounded-full w-40 h-40 object-cover border-4 border-saffron"
            />
            <h3 className="mt-4 font-bold text-xl">Vedant</h3>
          </div>

          {/* Robert */}
          <div
            className="cursor-pointer flex flex-col items-center transform hover:scale-110 transition duration-300"
            onClick={() => setSelected("robert")}
          >
            <img
              src={robertImg}
              alt="Robert"
              className="rounded-full w-40 h-40 object-cover border-4 border-saffron"
            />
            <h3 className="mt-4 font-bold text-xl">Robert</h3>
          </div>
        </div>
      </div>

      {/* Selected Profile View */}
      {selected && (
        <div className="flex flex-col md:flex-row items-center text-center md:text-left p-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 p-4 animate-slide-in-left">
            <img
              src={founders[selected].image}
              alt={founders[selected].name}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-6 animate-slide-in-right">
            <h1 className="text-4xl font-bold mb-4">{founders[selected].name}</h1>
            <div className="w-16 h-1 bg-saffron mx-auto md:mx-0 mb-4"></div>
            <p className="text-lg mb-6">{founders[selected].desc}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {founders[selected].links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-saffron text-night rounded-md hover:bg-saffron-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
