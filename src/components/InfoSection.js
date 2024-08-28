// import React from "react";
// import styled from "styled-components";
// import { FaUserGraduate, FaUsers } from "react-icons/fa";
// import { AiFillBank } from "react-icons/ai";
// import { BsDiagram3Fill } from "react-icons/bs";
// import { useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
// import { useState } from "react";

// const InfoSection = ({ users }) => {
//   const [totalStaffs, setTotalStaffs] = useState(0);
//   const [prof, setProf] = useState(0);
//   const numberOfProfessors = users.filter(
//     (user) => user.rank?.toLowerCase() === "professor"
//   ).length;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         const data = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         const filteredData = data.filter(
//           (user) => user.status === "approved" && user.name !== "Admin"
//         );

//         const checkProf = data.some(
//           (user) => user.rank?.toLowerCase() === "professor"
//         );
//         if (checkProf) {
//           setProf(filteredData.length - 1); // Subtract the admin from the total number of staffs
//         } else {
//           setProf(filteredData.length); // Set the total number of approved staffs
//         }
//         setTotalStaffs(filteredData.length); // Set the total number of approved staffs
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <InfoContainer>
//       <InfoItem>
//         <AiFillBank size={50} color="#FFF" />
//         <InfoNumber>13</InfoNumber>
//         <InfoText>Number of Faculty</InfoText>
//       </InfoItem>
//       <InfoItem>
//         <BsDiagram3Fill size={50} color="#FFF" />
//         <InfoNumber>118</InfoNumber>
//         <InfoText>Total Departments</InfoText>
//       </InfoItem>
//       <InfoItem>
//         <FaUserGraduate size={50} color="#FFF" />
//         <InfoNumber>{prof}</InfoNumber>
//         <InfoText>Number of Professors</InfoText>
//       </InfoItem>
//       <InfoItem>
//         <FaUsers size={50} color="#FFF" />
//         <InfoNumber>{totalStaffs}</InfoNumber>
//         <InfoText>Total Number of Staffs</InfoText>
//       </InfoItem>
//     </InfoContainer>
//   );
// };

// const InfoContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background-color: #003366;
//   padding: 2rem 0;
//   margin-bottom: 2rem;
// `;

// const InfoItem = styled.div`
//   text-align: center;
//   color: white;
//   margin-bottom: 0 2rem 2rem 2rem;
// `;

// const InfoNumber = styled.h2`
//   font-size: 2rem;
//   margin: 1rem 0;

//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//   }
// `;

// const InfoText = styled.p`
//   font-size: 1.2rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

// export default InfoSection;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BsDiagram3Fill } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const InfoSection = () => {
  const [totalStaffs, setTotalStaffs] = useState(0);
  const [professors, setProfessors] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredData = data.filter(
          (user) => user.status === "approved" && user.name !== "Admin"
        );

        const numberOfProfessors = filteredData.filter(
          (user) => user.rank?.toLowerCase() === "professor"
        ).length;

        setProfessors(numberOfProfessors);
        setTotalStaffs(filteredData.length);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

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
        <InfoNumber>{professors}</InfoNumber>
        <InfoText>Number of Professors</InfoText>
      </InfoItem>
      <InfoItem>
        <FaUsers size={50} color="#FFF" />
        <InfoNumber>{totalStaffs}</InfoNumber>
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
