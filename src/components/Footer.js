import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLink
            href="https://oauife.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            OAU Website
          </FooterLink>
          <FooterLink
            href="https://eportal.oauife.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Portal
          </FooterLink>
          <FooterLink href="#">Student Affairs</FooterLink>
          <FooterLink href="#">Admissions</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">Student Clubs</FooterLink>
          <FooterLink href="#">Jobs & Internship</FooterLink>
          <FooterLink
            href="https://studentlife.oauife.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Academic Life
          </FooterLink>
          <FooterLink href="#">Workshops</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">News</FooterLink>
          <FooterLink href="#">Campus Events</FooterLink>
          <FooterLink
            href="https://sportscomplex.oauife.edu.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sports
          </FooterLink>
          <FooterLink href="#">Student Union</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#">OAU Library</FooterLink>
          <FooterLink href="#">OAU Alumni</FooterLink>
          <FooterLink
            href="https://intecu.oauife.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intecu
          </FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>Copyright © 2024. All rights reserved.</FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #003366;
  color: white;
  padding: 2rem;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #fff;
  padding-top: 1rem;
`;

export default Footer;
