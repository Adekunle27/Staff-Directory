import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LecturerProfileForm from "./LecturerProfileForm";
import { useAuth } from "../contexts/AuthContext";
import styled, { keyframes } from "styled-components";
const EditProfile = () => {
  const { currentUser } = useAuth();
  const [existingData, setExistingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setExistingData(docSnap.data());
      }
    };
    fetchData();
  }, [currentUser]);

  return (
    <Container>
      <Alignh2>Edit Your Profile</Alignh2>
      {existingData ? (
        <LecturerProfileForm existingData={existingData} />
      ) : (
        <>
          <AlignLoading>
            <Loader className="loader" />
            <p>Loading...</p>
          </AlignLoading>
        </>
      )}
    </Container>
  );
};

export default EditProfile;

const Container = styled.div`
  padding: 2rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const Alignh2 = styled.h2`
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1.5rem;
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
