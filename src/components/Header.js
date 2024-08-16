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
    width: 100%;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Header = ({ search, setSearch, onSearch, handleFacultySelect }) => {
  return (
    <HeaderContainer>
      <Heading>Welcome to the University Staff Directory</Heading>
      <Subheading>
        Search for faculty and staff by name, department, or faculty
      </Subheading>
      <SearchContainer>
        <Select onChange={handleFacultySelect}>
          <option value="All">All Faculties</option>
          <option value="Science">Science</option>
          <option value="Art">Arts</option>
          <option value="Technology">Engineering</option>
          <option value="Clinical Science">Clinical Science</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="EDM">Environmental Designs (EDM)</option>
          <option value="Administration">Administration</option>
          <option value="Social Science">Social Science</option>
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
