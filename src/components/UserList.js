import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";
import { FaAtom } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";

const UserList = ({ search, users }) => {
  const filteredUsers = search
    ? users.filter(
        (user) =>
          (user.name &&
            user.name.toLowerCase().includes(search.toLowerCase())) ||
          (user.faculty &&
            user.faculty.toLowerCase().includes(search.toLowerCase())) ||
          (user.department &&
            user.department.toLowerCase().includes(search.toLowerCase())) ||
          (user.bio && user.bio.toLowerCase().includes(search.toLowerCase()))
      )
    : users;

  return (
    <StyledUserList>
      {filteredUsers.map((user) => (
        <StyledUserCard key={user.id}>
          <StyledLink to={`/user/${user.id}`}>
            <img src={user.image} alt={user.name} />
            <div>
              <h3>
                {user.name
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>
              <Paragraph>
                <IconWrapper>
                  <MdEmail />
                </IconWrapper>
                <Label>Email:</Label> {user.email}
              </Paragraph>
              <Paragraph>
                <IconWrapper>
                  <FaPhoneVolume />
                </IconWrapper>
                <Label>Phone:</Label> {user.phone}
              </Paragraph>
              <Paragraph>
                <IconWrapper>
                  <FaAtom />
                </IconWrapper>
                <Label>Faculty:</Label> {user.faculty}
              </Paragraph>
              <Paragraph>
                <IconWrapper>
                  <FaAtlassian />
                </IconWrapper>
                <Label>Department:</Label> {user.department}
              </Paragraph>
              <Paragraph>
                <IconWrapper>
                  <FaAnglesUp />
                </IconWrapper>
                <Label>Status:</Label> {user.rank}
              </Paragraph>
            </div>
          </StyledLink>
        </StyledUserCard>
      ))}
    </StyledUserList>
  );
};

const StyledUserList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const StyledUserCard = styled.div`
  background: #cfbcbc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4rem 4rem 8rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  color: #003366;
  max-height: 30rem;
  min-height: 28rem;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    max-height: 18.5rem;
    min-height: 17.7rem;
    border-radius: 10px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.25rem;
    color: #003366;
    text-decoration: underline;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #003366;
  }

  @media (max-width: 600px) {
    padding: 15px;
    h3 {
      font-size: 1rem;
      color: #003366;
    }
    p {
      font-size: 0.875rem;
      color: #003366;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1rem;
  color: #003366;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

const Label = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

export default UserList;
