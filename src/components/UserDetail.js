import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgOrganisation } from "react-icons/cg";
import { FaAnglesUp } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";
import { FaAtom } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";

import news from "../images/news.png";
import events from "../images/events.png";

const linkify = (text) => {
  const urlPattern =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  const wwwPattern = /\b(www\.[a-z0-9.-]+\.[a-z]{2,})/gi;
  const domainPattern = /\b([a-z0-9.-]+\.[a-z]{2,})\b/gi;
  const emailPattern = /(([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))/gi;

  return text.split(/(\s+)/).map((word, index) => {
    if (urlPattern.test(word)) {
      return (
        <a
          key={index}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "#003366" }}
        >
          {word}
        </a>
      );
    } else if (wwwPattern.test(word)) {
      return (
        <a
          key={index}
          href={`http://${word}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "#003366" }}
        >
          {word}
        </a>
      );
    } else if (domainPattern.test(word)) {
      return (
        <a
          key={index}
          href={`http://${word}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "#003366" }}
        >
          {word}
        </a>
      );
    } else if (emailPattern.test(word)) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          style={{ textDecoration: "underline", color: "#003366" }}
        >
          {word}
        </a>
      );
    } else {
      return word;
    }
  });
};

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

const AlignBoth = styled.div`
  display: flex;
  gap: 3.5em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BottomSection = styled.div`
  flex: 7.5;
  display: flex;
  flex-direction: column;
`;

const BottomRight = styled.div`
  flex: 2.5;
  flex-direction: column;
  display: flex;
  gap: 1.5rem; /* Adds spacing between news items */
`;

const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3dbdb;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h4`
  margin: 0.5rem 0;
  color: #003366;
  font-size: 1rem;
  font-weight: bold;
`;

const NewsDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #333;
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
const ParagraphQualification = styled.p`
  margin-top: 0;
  display: flex;
  align-items: center; /* Ensures the icon and text are aligned vertically */
  line-height: 1;
  font-style: bold;

  text-decoration: underline;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
              <BsBookmarkCheckFill />
            </IconWrapper>
            <Label>
              <b>Area(s) of Specialization:</b>
            </Label>{" "}
            {user.specialization}
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
      <AlignBoth>
        <BottomSection>
          <SectionTitle>My Bio</SectionTitle>
          <Paragraph>{user.bio} </Paragraph>

          <ParagraphQualification>
            <b>Academic Qualifications</b>: {user.qualifications}
          </ParagraphQualification>
          <ParagraphQualification>
            <b>Current Research interest</b>:{" "}
            {user.interest ? user.interest : "Plant Anatomy and Embryology."}
          </ParagraphQualification>
          <SectionTitle>Publications</SectionTitle>
          <List>
            {Array.isArray(user.publications) &&
            user.publications.length > 0 ? (
              user.publications.map((publication, index) => (
                <ListItem key={index}>{linkify(publication)}</ListItem>
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

        <BottomRight>
          <SectionTitle>News and Events</SectionTitle>
          <NewsItem>
            <NewsImage src={news} alt="News 1" />
            <NewsTitle>VISA Grant Opening</NewsTitle>
            <NewsDescription>
              Brief description about the VISA grant opening event.
            </NewsDescription>
          </NewsItem>
          <NewsItem>
            <NewsImage src={events} alt="News 2" />
            <NewsTitle>Academic Research Awards</NewsTitle>
            <NewsDescription>
              Brief description about the academic research awards.
            </NewsDescription>
          </NewsItem>
        </BottomRight>
      </AlignBoth>
    </UserDetailContainer>
  );
};

export default UserDetail;
