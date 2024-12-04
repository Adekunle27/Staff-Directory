import React, { useEffect, useState } from "react";
import { db, doc, getDoc, deleteDoc } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import DOMPurify from "dompurify";
import { PublicationsWrapper } from "../components/styles";

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
  position: absolute;
  top: 50vh;
  left: 50vw;
`;

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: ${spin} 4s infinite;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    border: 8px solid;
    border-radius: 50%;
    border-color: red green #0000 #0000;
    mix-blend-mode: darken;
    animation: ${spin} 1s infinite linear;
  }

  &::after {
    border-color: #0000 #0000 blue blue;
    animation-direction: reverse;
  }
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
    if (window.confirm("Are you sure you want to delete your profile?")) {
      try {
        await deleteDoc(doc(db, "users", currentUser.uid));
        alert("Profile deleted");
        setProfileData(null);
        navigate("/create-profile");
      } catch (error) {
        console.error("Failed to delete profile", error);
        alert(
          "An error occurred while deleting the profile. Please try again."
        );
      }
    } else {
      // User cancelled the deletion
      alert("Profile deletion cancelled.");
    }
  };

  if (loading) {
    return (
      <AlignLoading>
        <Loader className="loader" />
        <p>Loading...</p>
      </AlignLoading>
    );
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
        </ProfileImage>
        <ProfileDetails>
          <h2>{profileData.name}</h2>
          <p>
            <strong>Status: {profileData.rank}</strong>
          </p>
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
            <strong>Academic Qualifications:</strong>{" "}
            {profileData.qualifications}
          </p>
          <p>
            <strong>Area of Specialization:</strong>{" "}
            {profileData.specialization}
          </p>
          <p>
            <strong>Office:</strong> {profileData.office}
          </p>
          <h3>Career Summary:</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(profileData.bio),
            }}
          ></div>
          <h3>Publications:</h3>

          <PublicationsWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(profileData.publications),
            }}
          />

          <h3>Journals & Articles:</h3>
          <PublicationsWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(profileData.journal),
            }}
          ></PublicationsWrapper>
          <h3>Research Profile(s):</h3>
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
