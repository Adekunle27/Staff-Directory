// import React from 'react';
// import styled from 'styled-components';

// const UserDetail = ({ user, relatedUsers }) => {
//   return (
//     <StyledUserDetail>
//       <ProfileImage src={user.image} alt={user.name} />
//       <UserName>{user.name}</UserName>
//       <UserInfo>
//         <p><strong>Faculty:</strong> {user.faculty}</p>
//         <p><strong>Department:</strong> {user.department}</p>
//         <p><strong>Status:</strong> {user.status}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Bio:</strong> {user.bio}</p>
//       </UserInfo>
//       <RelatedListings>
//         <h3>Related Listings</h3>
//         {relatedUsers.map((relatedUser) => (
//           <RelatedUser key={relatedUser.id}>
//             <p>{relatedUser.name}</p>
//             <p>{relatedUser.department}</p>
//           </RelatedUser>
//         ))}
//       </RelatedListings>
//     </StyledUserDetail>
//   );
// };

// const StyledUserDetail = styled.div`
//   max-width: 75%;
//   margin: 0 auto;
//   padding: 20px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin: 0 auto;
// `;

// const UserName = styled.h2`
//   margin: 20px 0;
// `;

// const UserInfo = styled.div`
//   text-align: left;
//   margin: 0 auto;
//   max-width: 500px;

//   p {
//     margin: 5px 0;
//     line-height: 1.6;

//     strong {
//       margin-right: 5px;
//     }
//   }

//   a {
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const RelatedListings = styled.div`
//   margin-top: 40px;
//   text-align: left;
//   max-width: 500px;
//   margin: 0 auto;

//   h3 {
//     margin-bottom: 20px;
//   }
// `;

// const RelatedUser = styled.div`
//   border-top: 1px solid #eee;
//   padding: 10px 0;

//   p {
//     margin: 0;
//   }
// `;

// export default UserDetail;


// import React from 'react';
// import styled from 'styled-components';
// import UserCard from './UserCard';

// const UserDetail = ({ user, relatedUsers }) => {
//   return (
//     <StyledUserDetail>
//       <ProfileImage src={user.image} alt={user.name} />
//       <UserName>{user.name}</UserName>
//       <UserInfo>
//         <p><strong>Faculty:</strong> {user.faculty}</p>
//         <p><strong>Department:</strong> {user.department}</p>
//         <p><strong>Status:</strong> {user.status}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Bio:</strong> {user.bio}</p>
//       </UserInfo>
//       <RelatedListings>
//         <h3>Related Listings</h3>
//         <RelatedUserGrid>
//           {relatedUsers.map((relatedUser) => (
//             <UserCard key={relatedUser.id} user={relatedUser} />
//           ))}
//         </RelatedUserGrid>
//       </RelatedListings>
//     </StyledUserDetail>
//   );
// };

// const StyledUserDetail = styled.div`
//   max-width: 75%;
//   margin: 0 auto;
//   padding: 20px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin: 0 auto;
// `;

// const UserName = styled.h2`
//   margin: 20px 0;
// `;

// const UserInfo = styled.div`
//   text-align: left;
//   margin: 0 auto;
//   max-width: 500px;

//   p {
//     margin: 5px 0;
//     line-height: 1.6;

//     strong {
//       margin-right: 5px;
//     }
//   }
// `;

// const RelatedListings = styled.div`
//   margin-top: 40px;
//   text-align: left;
//   max-width: 500px;
//   margin: 0 auto;

//   h3 {
//     margin-bottom: 20px;
//   }
// `;

// const RelatedUserGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
// `;

// export default UserDetail;

// import React from 'react';
// import styled from 'styled-components';
// // import UserCard from './UserCard';

// const UserDetail = ({ user }) => {


//   return (
//     <StyledUserDetail>
//       <ProfileImage src={user.image} alt={user.name} />
//       <UserName>{user.name}</UserName>
//       <UserInfo>
//         <p><strong>Faculty:</strong> {user.faculty}</p>
//         <p><strong>Department:</strong> {user.department}</p>
//         <p><strong>Status:</strong> {user.status}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Bio:</strong> {user.bio}</p>
//       </UserInfo>
//     </StyledUserDetail>
//   );
// };



// const StyledUserDetail = styled.div`
//   max-width: 75%;
//   margin: 0 auto;
//   padding: 20px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin: 0 auto;
// `;

// const UserName = styled.h2`
//   margin: 20px 0;
// `;

// const UserInfo = styled.div`
//   text-align: left;
//   margin: 0 auto;
//   max-width: 500px;

//   p {
//     margin: 5px 0;
//     line-height: 1.6;

//     strong {
//       margin-right: 5px;
//     }
//   }
// `;

// const RelatedListings = styled.div`
//   margin-top: 40px;
//   text-align: left;
//   max-width: 100%;
//   position: relative;

//   h3 {
//     margin-bottom: 20px;
//   }
// `;

// const RelatedUserRow = styled.div`
//   display: flex;
//   overflow-x: auto;
//   scroll-behavior: smooth;
//   padding: 20px 0;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// const ScrollButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   color: #fff;
//   border: none;
//   border-radius: 50%;
//   padding: 10px;
//   cursor: pointer;
//   z-index: 10;

//   &:hover {
//     background: rgba(0, 0, 0, 0.8);
//   }

//   &:first-of-type {
//     left: -10px;
//   }

//   &:last-of-type {
//     right: -10px;
//   }
// `;

// export default UserDetail;
//New
// import React from 'react';
// import '../UserDetailPage.css';

// const UserDetail = ({ user }) => {
//   return (
//     <div className="user-detail">
//           <div className="left">
//             <img src={user.image} alt={user.name} />
//             <h4>Status: {user.status}</h4>
//           </div>
//           <div className="right">
//           <h1>{user.name}</h1>
//           <p>Phone Number: {user.phone}</p>
//           <p>Email Address: {user.email}</p>
//           <p>Faculty: {user.faculty}</p>
//           <p>Department: {user.department}</p>
//           <p>Brief About Me: <br></br> {user.bio}</p>
//           </div>
//     </div>
//   );
// };

// export default UserDetail;

import React from 'react';
import '../UserDetailPage.css';

const UserDetail = ({ user }) => {
  return (
    <div className="user-detail-page">
      <div className="user-detail">
        <div className="left">
          <img src={user.image} alt={user.name} />
          <h4>Status: {user.status}</h4>
        </div>
        <div className="right">
          <h1>{user.name}</h1>
          <p>Phone Number: {user.phone}</p>
          <p>Email Address: {user.email}</p>
          <p>Faculty: {user.faculty}</p>
          <p>Department: {user.department}</p>
          <h3>Brief About Me:</h3> <p> <br /> {user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

