import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../components/UserList";
import Header from "../components/Header";
import styled from "styled-components";

const Staffs = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [totalStaffs, setTotalStaffs] = useState(0);
  const usersPerPage = 12;

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
        setUsers(filteredData);
        setFilteredUsers(filteredData); // Initialize with all users
        setTotalStaffs(filteredData.length); // Set the total number of approved staffs
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = () => {
    const filtered = users.filter(
      (user) =>
        (user.name && user.name.toLowerCase().includes(search.toLowerCase())) ||
        (user.faculty &&
          user.faculty.toLowerCase().includes(search.toLowerCase())) ||
        (user.department &&
          user.department.toLowerCase().includes(search.toLowerCase())) ||
        (user.bio && user.bio.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredUsers(filtered);
    setSearchSubmitted(true); // Mark search as submitted
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} onSearch={handleSearch} />
      <Container>
        <FoundStaffText>
          {searchSubmitted
            ? `${filteredUsers.length} Staff${
                filteredUsers.length !== 1 ? "s" : ""
              } Found`
            : `Total number of staffs: ${totalStaffs}`}
        </FoundStaffText>
        <UserList users={currentUsers} />
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
        </Pagination>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 2rem auto;
  width: 80%;
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const FoundStaffText = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  background-color: ${({ active }) => (active ? "#0066cc" : "#ccc")};
  color: ${({ active }) => (active ? "white" : "black")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#005bb5" : "#bbb")};
  }
`;

export default Staffs;
