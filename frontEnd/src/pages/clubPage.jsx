import React from 'react';

const ClubPage = ({ name, description, links }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="my-4 text-lg text-gray-700">{description}</p>
      <div className="my-4">
        <h2 className="text-2xl font-semibold">Useful Links:</h2>
        <ul className="list-disc pl-5">
          {links.map((link, index) => (
            <li key={index}><a href={link} className="text-zaffre-500">{link}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubPage;