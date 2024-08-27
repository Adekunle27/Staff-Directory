import React from "react";
import styled from "styled-components";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BsDiagram3Fill } from "react-icons/bs";

const InfoSection = ({ users }) => {
  const numberOfProfessors = users.filter(
    (user) => user.rank?.toLowerCase() === "professor"
  ).length;

  return (
    <InfoContainer>
      <InfoItem>
        <AiFillBank size={50} color="#FFF" />
        <InfoNumber>13</InfoNumber>
        <InfoText>Number of Faculty</InfoText>
      </InfoItem>
      <InfoItem>
        <BsDiagram3Fill size={50} color="#FFF" />
        <InfoNumber>118</InfoNumber>
        <InfoText>Total Departments</InfoText>
      </InfoItem>
      <InfoItem>
        <FaUserGraduate size={50} color="#FFF" />
        <InfoNumber>{numberOfProfessors}</InfoNumber>
        <InfoText>Number of Professors</InfoText>
      </InfoItem>
      <InfoItem>
        <FaUsers size={50} color="#FFF" />
        <InfoNumber>{users.length}</InfoNumber>
        <InfoText>Total Number of Staffs</InfoText>
      </InfoItem>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #003366;
  padding: 2rem 0;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 0 2rem 2rem 2rem;
`;

const InfoNumber = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default InfoSection;
