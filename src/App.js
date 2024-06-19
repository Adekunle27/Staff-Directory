// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Staffs from './pages/Staffs';
// import Careers from './pages/Careers';
// import UserDetailPage from './pages/UserDetailPage';
// import Navbar from './components/NavBar';

// const App = () => (
//   <Router>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/staffs" element={<Staffs />} />
//       <Route path="/careers" element={<Careers />} />
//       <Route path="/user/:id" element={<UserDetailPage />} />
//     </Routes>
//   </Router>
// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Staffs from './pages/Staffs';
import Careers from './pages/Careers';
import UserDetailPage from './pages/UserDetailPage';
import Navbar from './components/NavBar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staffs" element={<Staffs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
    </Routes>
  </Router>
);

export default App;
