import React from "react";

const UserHome = ({ user }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl">Welcome, {user.name}</h1>
      <img src={`/images/${user.profilePicture}`} alt="Profile" className="w-32 h-32 rounded-full" />
      <div className="flex">
        <div className="w-1/2">
          <h2>Clubs You're Following</h2>
          {user.clubsFollowing.length ? (
            user.clubsFollowing.map((club) => <p key={club}>{club}</p>)
          ) : (
            <p>You're not following any clubs</p>
          )}
        </div>
        <div className="w-1/2">
          <h2>Clubs You're Part Of</h2>
          {user.clubsPartOf.length ? (
            user.clubsPartOf.map((club) => <p key={club}>{club}</p>)
          ) : (
            <p>It's time to start an adventure! Join or create a club!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
