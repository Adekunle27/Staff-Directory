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
import styled from "styled-components";
import Footer from "../components/Footer";

const UserDetailPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  @media (max-width: 768px) {
    padding: 1rem;
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
    return <p>Loading...</p>;
  }

  return (
    <>
      <UserDetailPageContainer>
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
