import React from 'react';
import { Link } from 'react-router-dom';

const LecturerProfilePage = () => {
  return (
    <div>
      <h2>Your Profile</h2>
      <Link to="/create-profile">Create Your Profile</Link>
      <Link to="/edit-profile">Edit Your Profile</Link>
      <Link to="/delete-profile">Delete Your Profile</Link>
    </div>
  );
};

export default LecturerProfilePage;
