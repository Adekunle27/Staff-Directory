import React from "react";
import UserList from "../components/UserList";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import headerImage from "../images/headerimg.png";
import Footer from "../components/Footer";

const Foundstaff = () => {
  const location = useLocation();
  const { foundUsers } = location.state || { foundUsers: [] };

  return (
    <>
      <HeaderContainer>
        <Heading>Found Staffs</Heading>
        <Subheading>
          {foundUsers.length} Staff{foundUsers.length !== 1 ? "s" : ""} Found
        </Subheading>
      </HeaderContainer>
      <Container>
        <UserList users={foundUsers} />
      </Container>
      <Footer />
    </>
  );
};

const HeaderContainer = styled.header`
  background: url(${headerImage}) no-repeat center center/cover;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  height: 50vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    height: 45vh;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    height: 50vh;
    margin-bottom: 4rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 8rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 0.25rem 0 1.5rem;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

export default Foundstaff;
