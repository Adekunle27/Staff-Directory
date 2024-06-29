// import React, { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";
// import UserList from "../components/UserList";
// import Header from "../components/Header";
// import styled from "styled-components";

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         const data = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setUsers(data.slice(0, 9)); // Display only first 9 users
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <Header search={search} setSearch={setSearch} />
//       <Container>
//         <UserList search={search} users={users} />
//       </Container>
//     </>
//   );
// };

// const Container = styled.div`
//   @media (max-width: 600px) {
//     padding: 0 1rem;
//   }
// `;

// export default Home;

import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../components/UserList";
import Header from "../components/Header";
import styled from "styled-components";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((user) => !user.isAdmin && user.approved) // Exclude admins and include only approved users
          .slice(0, 12); // Display only first 12 users
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container>
        <UserList search={search} users={users} />
      </Container>
    </>
  );
};

const Container = styled.div`
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export default Home;
