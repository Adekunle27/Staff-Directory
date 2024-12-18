import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";
import SlickSlider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [recentStaffs, setRecentStaffs] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [totalStaffs, setTotalStaffs] = useState(0);
  const [selectedSearchOption, setSelectedSearchOption] = useState("All");

  const navigate = useNavigate();

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
          orderBy("createdAt", "desc"),
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
    let filtered;
    const normalizePhoneNumber = (phone) => phone?.replace(/\D/g, ""); // Remove all non-numeric characters

    switch (selectedSearchOption) {
      case "Name":
        filtered = users.filter((user) =>
          user.name?.toLowerCase().includes(search.toLowerCase())
        );
        break;
      case "Email":
        filtered = users.filter((user) =>
          user.email?.toLowerCase().includes(search.toLowerCase())
        );
        break;
      case "Phone number":
        const normalizedSearch = normalizePhoneNumber(search);
        console.log("Normalized Search:", normalizedSearch); // Debugging log

        filtered = users.filter((user) => {
          const normalizedPhone = normalizePhoneNumber(user?.phone || ""); // Update to use `phone` field
          console.log("User Phone:", normalizedPhone); // Debugging log
          return normalizedPhone?.includes(normalizedSearch);
        });
        break;
      case "Rank":
        filtered = users.filter((user) =>
          user.rank?.toLowerCase().includes(search.toLowerCase())
        );
        break;
      case "Faculty":
        filtered = users.filter((user) =>
          user.faculty?.toLowerCase().includes(search.toLowerCase())
        );
        break;
      case "All":
      default:
        const normalizedSearchForAll = normalizePhoneNumber(search);
        filtered = users.filter(
          (user) =>
            user.name?.toLowerCase().includes(search.toLowerCase()) ||
            user.email?.toLowerCase().includes(search.toLowerCase()) ||
            normalizePhoneNumber(user?.phone || "")?.includes(
              normalizedSearchForAll
            ) ||
            user.rank?.toLowerCase().includes(search.toLowerCase()) ||
            user.faculty?.toLowerCase().includes(search.toLowerCase())
        );
        break;
    }

    setSearchSubmitted(true);

    // Redirect to Foundstaff page with found users
    navigate("/foundstaff", { state: { foundUsers: filtered } });
  };

  const handleStaffClick = (staffId) => {
    navigate(`/user/${staffId}`);
  };

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        selectedSearchOption={selectedSearchOption}
        setSelectedSearchOption={setSelectedSearchOption}
      />
      <InfoSection users={users} />
      <Container>
        <SectionTitle
          as={motion.h2} // Adding Framer Motion animation
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Recently Added Staff
        </SectionTitle>
        <SliderContainer
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...sliderSettings}>
            {recentStaffs.map((staff) => (
              <StaffCard
                as={motion.div}
                key={staff.id}
                onClick={() => handleStaffClick(staff.id)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ProfileImage src={staff.image} alt={staff.name} />
                <StaffInfo>
                  <StaffName>
                    {staff.name
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </StaffName>
                  <StaffFaculty> Faculty: {staff.faculty}</StaffFaculty>
                  <StaffDepartment>
                    Department: {staff.department}
                  </StaffDepartment>
                </StaffInfo>
              </StaffCard>
            ))}
          </Slider>
        </SliderContainer>
        <FoundStaffText
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Staff
        </FoundStaffText>

        <UserList users={filteredUsers} />

        <GoToStaff
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Want to see all the Lecturers? Click{" "}
          <Link
            to="/staffs"
            style={{ marginRight: "0.4rem", marginLeft: "0.4rem" }}
          >
            Here
          </Link>{" "}
          to go to the staff page.
        </GoToStaff>
      </Container>
      <Footer />
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
  max-height: 21.5rem;

  &:hover {
    transform: translateY(-5px);
  }
  padding: 1rem;
  width: 90%;
  margin: 0 0.5rem;
  cursor: pointer; /* Added for clickable effect */
`;

const ProfileImage = styled.img`
  width: 15rem;
  max-height: 14rem;
  // object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  // object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    // object-fit: cover;
  }
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
  margin-bottom: -0.4rem;
`;

const StaffDepartment = styled.p`
  font-size: 0.9rem;
  color: #003366;
`;

const FoundStaffText = styled.div`
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
`;

const GoToStaff = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export default Home;
