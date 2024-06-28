// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import styled from 'styled-components';

// // const Nav = styled.nav`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 1rem 2rem;
// //   background-color: #004d99;
// //   color: white;
// // `;

// // const Logo = styled.div`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// // `;

// // const NavLinks = styled.div`
// //   display: flex;
// //   gap: 1rem;
// // `;

// // const NavLink = styled(Link)`
// //   color: white;
// //   text-decoration: none;

// //   &:hover {
// //     text-decoration: underline;
// //   }
// // `;

// // const Navbar = () => (
// //   <Nav>
// //     <Logo>OAU Staff Directory</Logo>
// //     <NavLinks>
// //       <NavLink to="/">Home</NavLink>
// //       <NavLink to="/staffs">Staffs</NavLink>
// //       <NavLink to="/careers">Careers</NavLink>
// //       <NavLink to="/signup">SignUp</NavLink>
// //       <NavLink to="/login">Login</NavLink>
// //     </NavLinks>
// //   </Nav>
// // );

// // export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #004d99;
//   color: white;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const Hamburger = styled.div`
//   display: none;
//   flex-direction: column;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;

// const Bar = styled.div`
//   width: 25px;
//   height: 3px;
//   background-color: white;
//   margin: 4px 0;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     width: 100%;
//     padding: 1rem 0;
//     background-color: #004d99;
//   }
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Nav>
//       <Logo>OAU Staff Directory</Logo>
//       <Hamburger onClick={toggleMenu}>
//         <Bar />
//         <Bar />
//         <Bar />
//       </Hamburger>
//       <NavLinks isOpen={isOpen}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/staffs">Staffs</NavLink>
//         <NavLink to="/careers">Careers</NavLink>
//         <NavLink to="/signup">SignUp</NavLink>
//         <NavLink to="/login">Login</NavLink>
//       </NavLinks>
//     </Nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #004d99;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    background-color: #004d99;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavHeader>
        <Logo>OAU Staff Directory</Logo>
        <Hamburger onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </NavHeader>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/staffs">Staffs</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
