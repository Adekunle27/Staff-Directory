import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetail from "../components/UserDetail";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const UserDetailPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  @media (max-width: 768px) {
    padding: 1rem;
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

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", id));
        if (userDoc.exists()) {
          const userData = { id: userDoc.id, ...userDoc.data() };
          setUser(userData);
          fetchRelatedUsers(userData.faculty);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedUsers = async (faculty) => {
      try {
        const q = query(
          collection(db, "users"),
          where("faculty", "==", faculty)
        );
        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          if (doc.id !== id) {
            users.push({ id: doc.id, ...doc.data() });
          }
        });
        setRelatedUsers(users);
      } catch (error) {
        console.error("Error fetching related users:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <AlignLoading>
        <Loader className="loader" />
        <p>Loading...</p>
      </AlignLoading>
    );
  }

  return (
    <>
      <UserDetailPageContainer
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {user ? (
          <UserDetail user={user} relatedUsers={relatedUsers} />
        ) : (
          <p>User not found</p>
        )}
      </UserDetailPageContainer>
      <Footer />
    </>
  );
};

export default UserDetailPage;
