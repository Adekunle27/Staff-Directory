import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../components/UserList";
import Header from "../components/Header";
import styled from "styled-components";
import tech from "../images/technology.jpg";
import clinical from "../images/clinical.jpg";
import art from "../images/art.jpg";
import science from "../images/science.jpg";
import pharmacy from "../images/pharmacy.jpg";
import Agric from "../images/Agric.jpg";
import Law from "../images/law.png";
import EDM from "../images/EDM.png";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [totalStaffs, setTotalStaffs] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState("");

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
        setUsers(filteredData.slice(0, 12));
        setFilteredUsers(filteredData.slice(0, 12));
        setTotalStaffs(filteredData.length);
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
    setSearchSubmitted(true);
  };

  const handleFacultyClick = (faculty) => {
    const filtered = users.filter(
      (user) =>
        user.faculty && user.faculty.toLowerCase() === faculty.toLowerCase()
    );
    setFilteredUsers(filtered);
    setSelectedFaculty(faculty);
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} onSearch={handleSearch} />
      <Container>
        <FacultyText>Featured Faculties</FacultyText>
        <CardGrid>
          <Card onClick={() => handleFacultyClick("Technology")}>
            <CardImage src={tech} alt="Technology" />
            <CardTitle>Technology/Engineering</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Science")}>
            <CardImage src={science} alt="Science" />
            <CardTitle>Science</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Clinical Science")}>
            <CardImage src={clinical} alt="Clinical Science" />
            <CardTitle>Clinical Science</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Pharmacy")}>
            <CardImage src={pharmacy} alt="Pharmacy" />
            <CardTitle>Pharmacy</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Art")}>
            <CardImage src={art} alt="Art" />
            <CardTitle>Art</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Agriculture")}>
            <CardImage src={Agric} alt="Agriculture" />
            <CardTitle>Agriculture</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("Law")}>
            <CardImage src={Law} alt="Law" />
            <CardTitle>Law</CardTitle>
          </Card>
          <Card onClick={() => handleFacultyClick("EDM")}>
            <CardImage src={EDM} alt="EDM" />
            <CardTitle>Environmental Designs (EDM)</CardTitle>
          </Card>
        </CardGrid>
        <FoundStaffText>
          {selectedFaculty
            ? `${filteredUsers.length} Staff${
                filteredUsers.length !== 1 ? "s" : ""
              } Found in Faculty of ${selectedFaculty}`
            : searchSubmitted
            ? `${filteredUsers.length} Staff${
                filteredUsers.length !== 1 ? "s" : ""
              } Found`
            : `Total number of staffs: ${totalStaffs}`}
        </FoundStaffText>
        <UserList users={filteredUsers} />
      </Container>
      <GoToStaff>
        Wants to see all the Lecturers? Click <a href="/staffs">Here</a> to go
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

const FoundStaffText = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

const FacultyText = styled.div`
  text-align: center;
  margin: 1.5rem 0 2rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    // grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 400px;
    height: 15rem;
    object-fit: cover;
  }
`;

const CardTitle = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

const GoToStaff = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default Home;
