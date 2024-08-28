import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import vc from "../images/vc-large.jpg";
import dvcrid from "../images/dvcrid.jpg";
import dvca from "../images/DVC-academics.png";
import dvcAd from "../images/DVC-Admin.png";
import akbakare from "../images/akbakare.jpg";
import oafadehan2 from "../images/oafadehan2.png";
import oiabogan from "../images/oiabogan.jpg";

const featuredStaff = [
  {
    name: "Prof. A. S. Bamire",
    title: "Vice-Chancellor",
    image: vc,
  },
  {
    name: "Prof. M. O. Babalola",
    title: "Deputy Vice-Chancellor (Academics)",
    image: dvca,
  },
  {
    name: "Prof. O. M. A. Daramola",
    title: "Deputy Vice-Chancellor (Administration)",
    image: dvcAd,
  },
  {
    name: "Prof. A. I. Akinyemi",
    title: "DVC Research, Innovation and Development",
    image: dvcrid,
  },
  {
    name: "Mr. A. K. Bakare",
    title: "Registrar",
    image: akbakare,
  },
  {
    name: "Dr. O. A. Fadehan",
    title: "Librarian",
    image: oafadehan2,
  },
  {
    name: "Mrs. O. I. Abogan",
    title: "Bursar",
    image: oiabogan,
  },
];

const PrincipalOfficers = () => {
  const navigate = useNavigate();

  const handleCardClick = (staffName) => {
    navigate(`/userdetail/${staffName}`);
  };

  return (
    <FeaturedSection>
      <Title>The Principal Officers</Title>
      <CardsContainer>
        {featuredStaff.map((staff, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(staff.name)}
            style={{
              marginBottom: index >= 4 ? "2rem" : "0",
            }}
          >
            <Image src={staff.image} alt={staff.name} />
            <CardContent>
              <Name>{staff.name}</Name>
              <CardTitle>{staff.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </FeaturedSection>
  );
};

const FeaturedSection = styled.section`
  //   padding: 2rem;
  //   background-color: #f8f9fa;
  margin: 0 auto;
  max-width: 80%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0rem;
  font-size: 2.5rem;
  color: #003366;
`;
const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  color: #003366;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const Card = styled.div`
  width: calc(25% - 2rem); /* Four cards in a row */
  //   background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%; /* Two cards in a row on smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* One card in a row on the smallest screens */
  }
`;

const Image = styled.img`
  width: 340px;
  height: 380px;
  object-fit: no-repeat center center/cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 0.5rem;
`;

export default PrincipalOfficers;
