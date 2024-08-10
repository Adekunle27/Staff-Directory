import React from "react";
import styled from "styled-components";
import headerImage from "../images/headerimg.png";

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
    height: 40vh;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    height: 40vh;
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

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  width: 300px;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0066cc;
  color: white;
  margin-left: 1rem;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const Header = ({ search, setSearch, onSearch }) => (
  <HeaderContainer>
    <Heading>Welcome to OAU Staff Directory Website</Heading>
    <Subheading>
      Looking for a profile? Search by name, faculty, and department.
    </Subheading>
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchBox>
  </HeaderContainer>
);

export default Header;
