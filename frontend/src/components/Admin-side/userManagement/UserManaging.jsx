import React from 'react';
import './UserManaging.css'

const UserManaging = () => {
  return (
    <div className="dashboard">
      <div className="header">Login/Logout</div>
      <div className="logo">
        <h1>Blossom</h1>
      </div>
      <div className="sidebar">sidebar</div>
      <div className="bg-gray-200 content p-2">
        <div className="max-w-3xl m-auto py-8">
          <h1 className="text-2xl mb-2">Content Title</h1>
          <div className="w-full rounded shadow-md bg-white p-4"></div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default UserManaging;
