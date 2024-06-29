// import React, { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";
// import UserList from "../components/UserList";
// import styled from "styled-components";

// const Staffs = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 12;

//   useEffect(() => {
//     const fetchUsers = async () => {
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

//     fetchUsers();
//   }, []);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <Container>
//       <Header>Staff Directory</Header>
//       <Subheading>
//         Search For a Lecturer by their Name, faculty, department or a word or
//         information in their bio...
//       </Subheading>
//       <SearchBox>
//         <input
//           type="text"
//           placeholder="Search here..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </SearchBox>
//       <UserList search={search} users={currentUsers} />
//       <Pagination>
//         {Array.from(
//           { length: Math.ceil(users.length / usersPerPage) },
//           (_, index) => (
//             <PaginationButton
//               key={index + 1}
//               onClick={() => paginate(index + 1)}
//             >
//               {index + 1}
//             </PaginationButton>
//           )
//         )}
//       </Pagination>
//     </Container>
//   );
// };

// const Container = styled.div`
//   padding: 0 10rem;

//   @media (max-width: 1024px) {
//     padding: 0 2rem;
//   }

//   @media (max-width: 768px) {
//     padding: 0 1rem;
//   }

//   @media (max-width: 600px) {
//     padding: 0 0.5rem;
//   }
// `;

// const SearchBox = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;

//   input {
//     padding: 0.5rem;
//     font-size: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     width: 300px;

//     @media (max-width: 600px) {
//       width: 100%;
//       font-size: 0.875rem;
//       padding: 0.4rem;
//       margin: 1rem 2rem 3rem 2rem;
//     }
//   }
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
// `;

// const PaginationButton = styled.button`
//   padding: 10px;
//   margin: 5px;
//   border: 1px solid #007bff;
//   background-color: #007bff;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }

//   @media (max-width: 600px) {
//     padding: 0.5rem;
//     margin: 0.3rem;
//   }
// `;

// const Header = styled.h1`
//   font-size: 2rem;
//   margin-top: 20px;
//   align-self: center;
//   text-align: center;
//   width: 500px;
//   padding: 5rem 0 1.5rem 0;
//   margin: 0 auto;
//   color: #007bff;
//   text-decoration-color: #007bff;
//   text-decoration-thickness: 2px;
//   text-decoration-style: solid;

//   @media (max-width: 600px) {
//     font-size: 1.5rem;
//     padding: 2rem 0 1rem 0;
//   }
// `;

// const Subheading = styled.p`
//   font-size: 1rem;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   align-self: center;
//   text-align: center;
//   width: 500px;
//   margin: 0 auto;

//   @media (max-width: 600px) {
//     font-size: 0.875rem;
//     width: 90%;
//   }
// `;

// export default Staffs;

import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../components/UserList";
import styled from "styled-components";

const Staffs = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((user) => !user.isAdmin && user.approved); // Exclude admins and include only approved users
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Header>Staff Directory</Header>
      <Subheading>
        Search For a Lecturer by their Name, faculty, department or a word or
        information in their bio...
      </Subheading>
      <SearchBox>
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBox>
      <UserList search={search} users={currentUsers} />
      <Pagination>
        {Array.from(
          { length: Math.ceil(users.length / usersPerPage) },
          (_, index) => (
            <PaginationButton
              key={index + 1}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </PaginationButton>
          )
        )}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;

    @media (max-width: 600px) {
      width: 100%;
      font-size: 0.875rem;
      padding: 0.4rem;
      margin: 1rem 2rem 3rem 2rem;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.button`
  padding: 10px;
  margin: 5px;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    margin: 0.3rem;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-top: 20px;
  align-self: center;
  text-align: center;
  width: 500px;
  padding: 5rem 0 1.5rem 0;
  margin: 0 auto;
  color: #007bff;
  text-decoration-color: #007bff;
  text-decoration-thickness: 2px;
  text-decoration-style: solid;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 2rem 0 1rem 0;
  }
`;

const Subheading = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
  text-align: center;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 0.875rem;
    width: 90%;
  }
`;

export default Staffs;
