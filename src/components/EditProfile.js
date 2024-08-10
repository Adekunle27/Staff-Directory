import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LecturerProfileForm from "./LecturerProfileForm";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";

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
        <p>Loading...</p>
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
