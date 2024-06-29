// import React from 'react';
// import styled from 'styled-components';

// const UserDetailContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 2rem;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const LeftSection = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-right: 2rem;
//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 2rem;
//   }
// `;

// const RightSection = styled.div`
//   flex: 2;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;

// const Status = styled.h4`
//   margin: 0;
//   font-weight: bold;
// `;

// const Title = styled.h1`
//   margin-top: 0;
// `;

// const SectionTitle = styled.h3`
//   margin-bottom: 0.5rem;
// `;

// const Paragraph = styled.p`
//   margin-top: 0;
// `;

// const UserDetail = ({ user }) => {
//   return (
//     <UserDetailContainer>
//       <LeftSection>
//         <ProfileImage src={user.image} alt={user.name} />
//         <Status>Status: {user.rank}</Status>
//       </LeftSection>
//       <RightSection>
//         <Title>{user.name}</Title>
//         <Paragraph><b>Phone Number:</b> {user.phone}</Paragraph>
//         <Paragraph><b>Email Address:</b> {user.email}</Paragraph>
//         <Paragraph><b>Faculty:</b> {user.faculty}</Paragraph>
//         <Paragraph><b>Department:</b> {user.department}</Paragraph>
//         <Paragraph><b>Qualifications:</b> {user.qualifications}</Paragraph>
//         <SectionTitle>Brief About Me:</SectionTitle>
//         <Paragraph>{user.bio}</Paragraph>
//         <SectionTitle>Publications:</SectionTitle>
//         <Paragraph>{user.publications}</Paragraph>
//         <SectionTitle>Links:</SectionTitle>
//         <Paragraph>{user.links}</Paragraph>
//       </RightSection>
//     </UserDetailContainer>
//   );
// };

// export default UserDetail;


// import React from 'react';
// import styled from 'styled-components';

// const UserDetailContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 2rem;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const LeftSection = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-right: 2rem;
//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 2rem;
//   }
// `;

// const RightSection = styled.div`
//   flex: 2;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;

// const Status = styled.h4`
//   margin: 0;
//   font-weight: bold;
// `;

// const Title = styled.h1`
//   margin-top: 0;
// `;

// const SectionTitle = styled.h3`
//   margin-bottom: 0.5rem;
// `;

// const Paragraph = styled.p`
//   margin-top: 0;
// `;

// const List = styled.ul`
//   margin: 0;
//   padding-left: 20px;
// `;

// const ListItem = styled.li`
//   margin-bottom: 0.5rem;
// `;

// const UserDetail = ({ user }) => {
//   return (
//     <UserDetailContainer>
//       <LeftSection>
//         <ProfileImage src={user.image} alt={user.name} />
//         <Status>Status: {user.rank}</Status>
//       </LeftSection>
//       <RightSection>
//         <Title>{user.name}</Title>
//         <Paragraph><b>Phone Number:</b> {user.phone}</Paragraph>
//         <Paragraph><b>Email Address:</b> {user.email}</Paragraph>
//         <Paragraph><b>Faculty:</b> {user.faculty}</Paragraph>
//         <Paragraph><b>Department:</b> {user.department}</Paragraph>
//         <Paragraph><b>Qualifications:</b> {user.qualifications}</Paragraph>
//         <SectionTitle>Brief About Me:</SectionTitle>
//         <Paragraph>{user.bio}</Paragraph>
//         <SectionTitle>Publications:</SectionTitle>
//         <List>
//           {user.publications.map((publication, index) => (
//             <ListItem key={index}>{publication}</ListItem>
//           ))}
//         </List>
//         <SectionTitle>Links:</SectionTitle>
//         <List>
//           {user.links.map((link, index) => (
//             <ListItem key={index}>
//               <a href={link.startsWith('http') ? link : `http://${link}`} target="_blank" rel="noopener noreferrer">{link}</a>
//             </ListItem>
//           ))}
//         </List>
//       </RightSection>
//     </UserDetailContainer>
//   );
// };

// export default UserDetail;

import React from 'react';
import styled from 'styled-components';

const UserDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const RightSection = styled.div`
  flex: 2;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Status = styled.h4`
  margin: 0;
  font-weight: bold;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  margin-top: 0;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const UserDetail = ({ user }) => {
  return (
    <UserDetailContainer>
      <LeftSection>
        <ProfileImage src={user.image} alt={user.name} />
        <Status>Status: {user.rank}</Status>
      </LeftSection>
      <RightSection>
        <Title>{user.name}</Title>
        <Paragraph><b>Phone Number:</b> {user.phone}</Paragraph>
        <Paragraph><b>Email Address:</b> {user.email}</Paragraph>
        <Paragraph><b>Faculty:</b> {user.faculty}</Paragraph>
        <Paragraph><b>Department:</b> {user.department}</Paragraph>
        <Paragraph><b>Qualifications:</b> {user.qualifications}</Paragraph>
        <SectionTitle>Brief About Me:</SectionTitle>
        <Paragraph>{user.bio}</Paragraph>
        <SectionTitle>Publications:</SectionTitle>
        <List>
          {Array.isArray(user.publications) && user.publications.length > 0 ? (
            user.publications.map((publication, index) => (
              <ListItem key={index}>{publication}</ListItem>
            ))
          ) : (
            <Paragraph>No publications available.</Paragraph>
          )}
        </List>
        <SectionTitle>Links:</SectionTitle>
        <List>
          {Array.isArray(user.links) && user.links.length > 0 ? (
            user.links.map((link, index) => (
              <ListItem key={index}>
                <a href={link.startsWith('http') ? link : `http://${link}`} target="_blank" rel="noopener noreferrer">{link}</a>
              </ListItem>
            ))
          ) : (
            <Paragraph>No links available.</Paragraph>
          )}
        </List>
      </RightSection>
    </UserDetailContainer>
  );
};

export default UserDetail;

