import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
import { db } from "../firebase.js";
import UserList from "../components/UserList";
import Header from "../components/Header";
import styled from "styled-components";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [recentStaffs, setRecentStaffs] = useState([]);
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

    const fetchRecentStaffs = async () => {
      try {
        const recentQuery = query(
          collection(db, "users"),
          where("status", "==", "approved"),
          limit(10)
        );
        const recentSnapshot = await getDocs(recentQuery);
        const recentData = recentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecentStaffs(recentData);
      } catch (error) {
        console.error("Error fetching recent staff data:", error);
      }
    };

    fetchUsers();
    fetchRecentStaffs();
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

  const handleFacultySelect = (event) => {
    const faculty = event.target.value;
    setSelectedFaculty(faculty);
    const filtered =
      faculty === "All"
        ? users
        : users.filter(
            (user) =>
              user.faculty &&
              user.faculty.toLowerCase() === faculty.toLowerCase()
          );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        handleFacultySelect={handleFacultySelect}
      />
      <Container>
        <SectionTitle>Recently Added Staff</SectionTitle>
        <SliderContainer>
          <Slider {...sliderSettings}>
            {recentStaffs.map((staff) => (
              <StaffCard key={staff.id}>
                <ProfileImage src={staff.image} alt={staff.name} />
                <StaffInfo>
                  <StaffName>{staff.name}</StaffName>
                  <StaffFaculty> Faculty: {staff.faculty}</StaffFaculty>
                  <StaffDepartment>
                    {" "}
                    Department: {staff.department}
                  </StaffDepartment>
                </StaffInfo>
              </StaffCard>
            ))}
          </Slider>
        </SliderContainer>
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

        <GoToStaff>
          Want to see all the Lecturers? Click{" "}
          <a
            href="/staffs"
            style={{ marginRight: "0.4rem", marginLeft: "0.4rem" }}
          >
            Here
          </a>{" "}
          to go to the staff page.
        </GoToStaff>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider = styled(SlickSlider)`
  .slick-list {
    overflow: hidden;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StaffCard = styled.div`
  background-color: #e7d2d2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  color: #003366;

  &:hover {
    transform: translateY(-5px);
  }
  padding: 1rem;
  width: 90%;
  margin: 0 0.5rem; /* Add margin to create space between cards */
`;

const ProfileImage = styled.img`
  width: 15.5rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const StaffInfo = styled.div`
  text-align: left;
`;

const StaffName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StaffFaculty = styled.p`
  font-size: 1rem;
  color: #003366;
`;

const StaffDepartment = styled.p`
  font-size: 0.9rem;
  color: #003366;
`;

const FoundStaffText = styled.div`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

const GoToStaff = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default Home;
