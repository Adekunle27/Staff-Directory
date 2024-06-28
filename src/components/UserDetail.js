import React from 'react';
import '../UserDetailPage.css';

const UserDetail = ({ user }) => {
  return (
    <div className="user-detail-page">
      <div className="user-detail">
        <div className="left">
          <img src={user.image} alt={user.name} />
          <h4>Status: {user.rank}</h4>
        </div>
        <div className="right">
          <h1>{user.name}</h1>
          <p><b>Phone Number</b>: {user.phone}</p>
          <p><b>Email Address:</b> {user.email}</p>
          <p><b>Faculty:</b> {user.faculty}</p>
          <p><b>Department:</b> {user.department}</p>
          <p>Qualifications: <b>{user.qualifications}</b></p>
          <h3>Brief About Me:</h3> <p> <br /> {user.bio}</p>
          <h3>Publications:</h3> <p> <br /> {user.publications}</p>
          <h3>Links:</h3> <p> <br /> {user.links}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

