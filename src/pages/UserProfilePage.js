import React, { useEffect, useState } from "react";
import { db, doc, getDoc, deleteDoc } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    // border-radius: 50%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f9f9f9;
  border: solid 1px #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  color: #000;
  transition: 0.2s;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ProfileDetails = styled.div`
  flex: 2;
  padding-left: 20px;

  h2 {
    font-size: 2em;
  }

  button {
    margin: 10px 0;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const AlignLoading = styled.div`
  text-align: center;
`;

const UserProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (profileDoc.exists()) {
          const data = profileDoc.data();
          console.log("Fetched Data: ", data); // Log fetched data
          // Ensure links is an array
          data.links = Array.isArray(data.links)
            ? data.links
            : data.links
            ? data.links.split(",").map((link) => link.trim())
            : [];
          // Ensure publications is an array
          data.publications = Array.isArray(data.publications)
            ? data.publications
            : data.publications
            ? data.publications.split(",").map((pub) => pub.trim())
            : [];

          // Add protocol to links if missing
          data.links = data.links.map((link) =>
            link.startsWith("http://") || link.startsWith("https://")
              ? link
              : `http://${link}`
          );

          setProfileData(data);
          console.log("Profile Data Set: ", data); // Log data after setting state
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching profile: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      await deleteDoc(doc(db, "users", currentUser.uid));

      if (window.confirm("Are you sure you want to delete your profile?")) {
        alert("Profile deleted");
        setProfileData(null);
        navigate("/create-profile");
      } else {
        setProfileData(profileData);
        return;
      }
    } catch (error) {
      console.error("Failed to delete profile", error);
    }
  };

  if (loading) {
    return <AlignLoading>Loading...</AlignLoading>;
  }

  if (!profileData) {
    return <AlignLoading>No profile data found.</AlignLoading>;
  }

  return (
    <Container>
      <h2>Your Profile</h2>
      <p>Welcome, {profileData.name}</p>
      <AlignButton>
        <Button onClick={() => navigate("/edit-profile")}>
          Edit your profile
        </Button>
        <div>
          <Button onClick={handleDeleteProfile}>Delete your profile</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </AlignButton>
      <ProfileContainer>
        <ProfileImage>
          {profileData.image && <img src={profileData.image} alt="Profile" />}
          <p>Status: {profileData.rank}</p>
        </ProfileImage>
        <ProfileDetails>
          <h2>{profileData.name}</h2>
          <p>
            <strong>Phone Number:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Email Address:</strong> {profileData.email}
          </p>
          <p>
            <strong>Faculty:</strong> {profileData.faculty}
          </p>
          <p>
            <strong>Department:</strong> {profileData.department}
          </p>
          <p>
            <strong>Qualifications:</strong> {profileData.qualifications}
          </p>
          <p>
            <strong>Area of Specialization:</strong>{" "}
            {profileData.specialization}
          </p>
          <p>
            <strong>Office:</strong> {profileData.office}
          </p>
          <h3>Brief About Me:</h3>
          <p>{profileData.bio}</p>
          <h3>Publications:</h3>
          <ol>
            {profileData.publications.map((publication, index) => (
              <li key={index}>{publication}</li>
            ))}
          </ol>
          <h3>Links:</h3>
          <ol>
            {profileData.links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ol>
        </ProfileDetails>
      </ProfileContainer>
    </Container>
  );
};

export default UserProfilePage;
