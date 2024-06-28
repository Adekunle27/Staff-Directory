// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // Implement this context if you don't have one

// const PrivateRoute = ({ children, adminOnly }) => {
//   const { currentUser, isAdmin } = useAuth();

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   if (adminOnly && !isAdmin) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

