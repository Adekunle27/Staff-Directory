// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
// import styled from "styled-components";

// const UserList = ({ search }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         const data = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       (user.name && user.name.toLowerCase().includes(search.toLowerCase())) ||
//       (user.status &&
//         user.status.toLowerCase().includes(search.toLowerCase())) ||
//       (user.faculty &&
//         user.faculty.toLowerCase().includes(search.toLowerCase())) ||
//       (user.department &&
//         user.department.toLowerCase().includes(search.toLowerCase())) ||
//       (user.bio && user.bio.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <StyledUserList>
//       {filteredUsers.map((user) => (
//         <StyledUserCard key={user.id}>
//           <Link to={`/user/${user.id}`}>
//             <img src={user.image} alt={user.name} />
//             <div>
//               <h3>{user.name}</h3>
//               <p>Email: {user.email}</p>
//               <p>Phone: {user.phone}</p>
//               <p>Faculty: {user.faculty}</p>
//               <p>Department: {user.department}</p>
//               <p>Status: {user.rank}</p>
//             </div>
//           </Link>
//         </StyledUserCard>
//       ))}
//     </StyledUserList>
//   );
// };

// const StyledUserList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding: 0 10rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     padding: 0 2rem;
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//     padding: 0 1rem;
//   }
// `;

// const StyledUserCard = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 10px;
//   }

//   h3 {
//     margin: 10px 0;
//     font-size: 1.25rem;
//   }

//   p {
//     margin: 5px 0;
//     font-size: 1rem;
//   }

//   @media (max-width: 600px) {
//     padding: 15px;
//     h3 {
//       font-size: 1rem;
//     }
//     p {
//       font-size: 0.875rem;
//     }
//   }
// `;

// export default UserList;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserList = ({ search, users }) => {
  const filteredUsers = users.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(search.toLowerCase())) ||
      (user.faculty &&
        user.faculty.toLowerCase().includes(search.toLowerCase())) ||
      (user.department &&
        user.department.toLowerCase().includes(search.toLowerCase())) ||
      (user.bio && user.bio.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <UserListContainer>
      {filteredUsers.map((user) => (
        <UserCard key={user.id}>
          <Link to={`/user/${user.id}`}>
            <img src={user.image} alt={user.name} />
            <div>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Faculty: {user.faculty}</p>
              <p>Department: {user.department}</p>
              <p>Status: {user.rank}</p>
            </div>
          </Link>
        </UserCard>
      ))}
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
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

const UserCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.25rem;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    padding: 15px;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export default UserList;
