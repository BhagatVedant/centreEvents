import React from 'react';

function User() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Dashboard</h1>
      <div className="bg-white shadow p-4 rounded">
        <p>Clubs you're following or part of will appear here.</p>
      </div>
    </div>
  );
}

export default User;