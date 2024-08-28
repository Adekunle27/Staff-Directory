import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Foundstaff from "./pages/Foundstaff";
import Staffs from "./pages/Staffs";
import Careers from "./pages/Careers";
import UserDetailPage from "./pages/UserDetailPage";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfilePage from "./pages/UserProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import LecturerProfilePage from "./pages/LecturerProfilePage";
import AdminProfilePage from "./pages/AdminProfilePage";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import PrincipalDetails from "./components/PrincipalDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/foundstaff" element={<Foundstaff />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/userdetail/:name" element={<PrincipalDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/lecturer-profile"
          element={
            <PrivateRoute>
              <LecturerProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateAdminRoute>
              <AdminProfilePage />
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
