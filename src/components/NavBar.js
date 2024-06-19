import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #004d99;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>OAU Staff Directory</Logo>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/staffs">Staffs</NavLink>
      <NavLink to="/careers">Careers</NavLink>
    </NavLinks>
  </Nav>
);

export default Navbar;
