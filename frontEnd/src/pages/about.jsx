import React, { useState } from "react";
import "../styles/about.css"; // Optional: Add custom styles for fine-tuning

const About = () => {
  // State to track which silhouette is selected
  const [selected, setSelected] = useState(null);

  // Data for founders
  const founders = {
    vedant: {
      name: "Vedant Bhagat",
      desc: "Placeholder description for Vedant. Add more details here.",
      links: [
        { name: "GitHub", url: "https://github.com/your-username" },
        { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
      ],
    },
    robert: {
      name: "Robert Nguyen",
      desc: "Placeholder description for Robert. Add more details here.",
      links: [
        { name: "GitHub", url: "https://github.com/another-username" },
        { name: "LinkedIn", url: "https://linkedin.com/in/another-username" },
      ],
    },
  };

  // Reset to "CentreEvents" view
  const handleOutsideClick = () => setSelected(null);

  return (
    <div className="relative min-h-screen bg-oxford_blue flex items-center justify-center text-anti-flash_white">
      {/* Transparency Overlay */}
      {selected && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleOutsideClick}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`z-20 relative p-10 rounded-lg ${
          selected ? "bg-transparent" : "bg-oxford_blue shadow-lg"
        }`}
      >
        {/* Default View */}
        {!selected && (
          <>
            <h1 className="text-4xl font-bold text-center mb-6">CentreEvents</h1>
            <p className="text-center text-lg mb-12">
              CentreEvents is your one-stop platform for discovering events and engaging with clubs at our
              college. Stay up to date with everything happening across campus!
            </p>

            <div className="flex justify-between items-center">
              {/* Vedant's Silhouette */}
              <div
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setSelected("vedant")}
              >
                <div className="bg-saffron rounded-full w-28 h-28 flex items-center justify-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/70897139?v=4"
                    alt="Vedant Bhagat"
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-2 font-bold">Vedant</h3>
              </div>

              {/* Robert's Silhouette */}
              <div
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setSelected("robert")}
              >
                <div className="bg-saffron rounded-full w-28 h-28 flex items-center justify-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/150546895?v=4"
                    alt="Robert Nguyen"
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-2 font-bold">Robert</h3>
              </div>
            </div>
          </>
        )}

        {/* Selected View */}
        {selected && (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{founders[selected].name}</h1>
            <p className="text-lg mb-6">{founders[selected].desc}</p>

            {/* Links */}
            <div className="flex justify-center space-x-6">
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
        )}
      </div>
    </div>
  );
};

export default About;
