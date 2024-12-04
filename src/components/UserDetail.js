import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPaintbrush, FaPhoneVolume } from "react-icons/fa6";
import { CgOrganisation } from "react-icons/cg";
import { FaAnglesUp } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";
import { FaAtom } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import DOMPurify from "dompurify";
import { PublicationsWrapper, QuillContentWrapper } from "./styles";

import news from "../images/news.png";
import events from "../images/events.png";
import { TiPointOfInterest } from "react-icons/ti";

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

// const UserDetailContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 2rem;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px; /* Limits overall width for better readability */
  margin: 0 auto; /* Centers the component */
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
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

// const AlignBoth = styled.div`
//   display: flex;
//   // flex-direction: row;
//   gap: 3.5em;
//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

const AlignBoth = styled.div`
  display: flex;
  gap: 3.5rem;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

// const BottomSection = styled.div`
//   // flex: 0.75;
//   display: flex;
//   flex-direction: column;
// `;

const BottomSection = styled.div`
  max-width: 70%; /* Ensures it adapts to container width */
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// const BottomRight = styled.div`
//   // flex: 0.25;
//   flex-direction: column;
//   display: flex;
//   gap: 1.5rem; /* Adds spacing between news items */
// `;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 23%;

  @media (max-width: 768px) {
    display: none;
  }
`;

// const NewsItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #f3dbdb;
//   padding: 1rem;
//   border-radius: 5px;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const NewsImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 5px;
//   margin-bottom: 0.5rem;
// `;

const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3dbdb;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures content doesn't overflow */
`;

const NewsImage = styled.img`
  width: 100%; /* Ensures responsiveness */
  height: auto;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  object-fit: cover;
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

// const ProfileImage = styled.img`
//   width: 300px;
//   height: 300px;
//   object-fit: cover;

//   @media (max-width: 768px) {
//     display: flex;
//     align-self: center;
//   }
// `;

const ProfileImage = styled.img`
  width: 100%; /* Responsive for larger screens */
  max-width: 300px; /* Sets an upper limit for the size */
  height: auto;
  object-fit: cover;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    align-self: center;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

// const SectionTitle = styled.h3`
//   margin-bottom: 0.5rem;
//   background-color: #003366;
//   color: #fff;
//   padding: 1rem 1.5rem;
//   border-radius: 5px;
// `;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  background-color: #003366;
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  font-size: 1.25rem; /* Adjusted for readability */
  // text-align: center; /* Centers the text */
`;

// const Paragraph = styled.p`
//   margin-top: 0;
//   display: flex;
//   align-items: center; /* Ensures the icon and text are aligned vertically */
//   line-height: 1.5;
// `;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  line-height: 1.6;
  word-wrap: break-word; /* Prevents long words from breaking layout */
`;

const ParagraphQualification = styled.p`
  margin-top: 0;
  display: flex;
  align-items: flex-start; /* Ensures the icon and text are aligned vertically */
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
          <Title>
            {user.name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Title>
          <Paragraph>
            <IconWrapper>
              <FaPhoneVolume />
            </IconWrapper>
            <Label>
              <b>Phone Number:</b>
            </Label>
            {user.phone ? user.phone : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <MdEmail />
            </IconWrapper>
            <Label>
              <b>Email Address:</b>
            </Label>
            {user.email ? user.email : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAtom />
            </IconWrapper>
            <Label>
              <b>Faculty:</b>
            </Label>
            {user.faculty === "EDM"
              ? "Environmental design and management"
              : user.faculty}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAtlassian />
            </IconWrapper>
            <Label>
              <b>Department:</b>
            </Label>
            {user.department ? user.department : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaAnglesUp />
            </IconWrapper>
            <Label>
              <b>Status/Rank:</b>
            </Label>
            {user.rank ? user.rank : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <TiPointOfInterest />
            </IconWrapper>
            <Label>
              <b>Staff Category:</b>
            </Label>
            {user.category ? user.category : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaGraduationCap />
            </IconWrapper>
            <Label>
              <b>Academic Qualification(s):</b>
            </Label>{" "}
            {user.qualifications ? user.qualifications : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <BsBookmarkCheckFill />
            </IconWrapper>
            <Label>
              <b>Area(s) of Specialization:</b>
            </Label>{" "}
            {user.specialization ? user.specialization : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <FaPaintbrush />
            </IconWrapper>
            <Label>
              <b>Research interest:</b>
            </Label>{" "}
            {user.interest ? user.interest : "Not Available."}
          </Paragraph>
          <Paragraph>
            <IconWrapper>
              <CgOrganisation />
            </IconWrapper>
            <Label>
              <b>Office Address:</b>
            </Label>
            {user.office ? user.office : "Not Available."}
          </Paragraph>
        </RightSectionTop>
      </Topstyle>
      <AlignBoth>
        <BottomSection>
          <SectionTitle>Career Summary</SectionTitle>
          <QuillContentWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(user.bio), // Sanitize HTML before rendering
            }}
          />

          <SectionTitle>Publications</SectionTitle>
          <PublicationsWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(user.publications),
            }}
          />

          <SectionTitle>Creative Output - Journals/Articles</SectionTitle>
          <PublicationsWrapper
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(user.journal),
            }}
          ></PublicationsWrapper>

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
