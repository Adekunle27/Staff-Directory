import React from 'react';
import styled from 'styled-components';

import headerImage from './headerimg.jpg';


const HeaderContainer = styled.header`
background: url(${headerImage}) no-repeat center center/cover;

  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  height: 30vh;

  &::after {
    content: '';
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
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  width: 300px;
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
`;

const Header = ({ search, setSearch }) => (
  <HeaderContainer>
    <Heading>Welcome to OAU Staff Directory Website</Heading>
    <Subheading>Looking for a profile? Search by name, faculty, and department.</Subheading>
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton>Search</SearchButton>
    </SearchBox>
  </HeaderContainer>
);

export default Header;
