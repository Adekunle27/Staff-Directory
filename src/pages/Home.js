import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../components/UserList";
import Header from "../components/Header";
import styled from "styled-components";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const filteredData = data.filter(
          (user) => user.status === "approved" && user.name !== "Admin"
        );
        setUsers(filteredData.slice(0, 12)); // Display only first 12 users
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container>
        <UserList search={search} users={users} />
      </Container>
      <GoToStaff>
        Wants to see all the Lecturers? Click <a href="/staffs"> Here </a> to go
        to the staff page
      </GoToStaff>
    </>
  );
};

const Container = styled.div`
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const GoToStaff = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default Home;
