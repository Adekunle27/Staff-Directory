import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgOrganisation } from "react-icons/cg";
import { FaAnglesUp } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";
import { FaAtom } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    margin-left: 0;
    align-items: flex-start;
  }
`;

const RightSectionTop = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Topstyle = styled.div`
  display: flex;
  color: #003366;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    align-items: flex-start;
  }
`;

const BottomSection = styled.div`
  flex: 2;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: flex;
    align-self: center;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.5rem;
  background-color: #003366;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 5px;
`;

const Paragraph = styled.p`
  margin-top: 0;
  display: flex;
  align-items: center; /* Ensures the icon and text are aligned vertically */
  line-height: 1.5;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

const Label = styled.span`
  margin-right: 0.2rem;
  font-weight: bold;
`;

const List = styled.ol`
  margin: 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const UserDetail = ({ user }) => {
  return (
    <UserDetailContainer>
      <Topstyle>
        <LeftSection>
          <ProfileImage src={user.image} alt={user.name} />
        </LeftSection>
        <RightSectionTop>
          <Title>{user.name}</Title>
          <Paragraph>
            <IconWrapper>
              <FaPhoneVolume />
            </IconWrapper>
            <Label>
              <b>Phone Number:</b>
            </Label>
            {user.phone}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <MdEmail />
            </IconWrapper>
            <Label>
              <b>Email Address:</b>
            </Label>
            {user.email}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAtom />
            </IconWrapper>
            <Label>
              <b>Faculty:</b>
            </Label>
            {user.faculty}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAtlassian />
            </IconWrapper>
            <Label>
              <b>Department:</b>
            </Label>
            {user.department}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAnglesUp />
            </IconWrapper>
            <Label>
              <b>Status/Rank:</b>
            </Label>
            {user.rank}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaGraduationCap />
            </IconWrapper>
            <Label>
              <b>Qualifications:</b>
            </Label>{" "}
            {user.qualifications}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <CgOrganisation />
            </IconWrapper>
            <Label>
              <b>Office:</b>
            </Label>
            RM 239 Faculty of Art building
          </Paragraph>
        </RightSectionTop>
      </Topstyle>
      <BottomSection>
        <SectionTitle>My Bio</SectionTitle>
        <Paragraph>{user.bio}</Paragraph>
        <SectionTitle>Publications</SectionTitle>
        <List>
          {Array.isArray(user.publications) && user.publications.length > 0 ? (
            user.publications.map((publication, index) => (
              <ListItem key={index}>{publication}</ListItem>
            ))
          ) : (
            <Paragraph>No publications available.</Paragraph>
          )}
        </List>
        <SectionTitle>Links</SectionTitle>
        <List>
          {Array.isArray(user.links) && user.links.length > 0 ? (
            user.links.map((link, index) => (
              <ListItem key={index}>
                <a
                  href={link.startsWith("http") ? link : `http://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </ListItem>
            ))
          ) : (
            <Paragraph>No links available.</Paragraph>
          )}
        </List>
      </BottomSection>
    </UserDetailContainer>
  );
};

export default UserDetail;
