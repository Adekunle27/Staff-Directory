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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  width: 300px;

  @media (max-width: 600px) {
    width: 93.7%;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0056b3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Header = ({
  search,
  setSearch,
  onSearch,
  selectedSearchOption,
  setSelectedSearchOption,
  heading = "Welcome to OAU Staff Directory Website", // Default heading
  subheading = "Find staff by name, faculty, department and their rank", // Default subheading
}) => {
  return (
    <HeaderContainer>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <SearchContainer>
        <Select
          onChange={(e) => setSelectedSearchOption(e.target.value)}
          value={selectedSearchOption}
        >
          <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Email">Email</option>
          <option value="Phone number">Phone number</option>
          <option value="Rank">Rank</option>
          <option value="Faculty">Faculty</option>
        </Select>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton onClick={onSearch}>Search</SearchButton>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
