import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import styled from 'styled-components';

const UserList = ({ search }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched data:', data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    (user.name && user.name.toLowerCase().includes(search.toLowerCase())) ||
    (user.status && user.status.toLowerCase().includes(search.toLowerCase())) ||
    (user.faculty && user.faculty.toLowerCase().includes(search.toLowerCase())) ||
    (user.department && user.department.toLowerCase().includes(search.toLowerCase())) ||
    (user.bio && user.bio.toLowerCase().includes(search.toLowerCase()))
  );

  console.log('Filtered users:', filteredUsers);

  return (
    <StyledUserList>
      {filteredUsers.map(user => (
        <StyledUserCard key={user.id}>
          <Link to={`/user/${user.id}`}>
            <img src={user.image} alt={user.name} height={250} width={350} />
            <div>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Faculty: {user.faculty}</p>
              <p>Department: {user.department}</p>
              <p>Status: {user.rank}</p>
            </div>
          </Link>
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
  padding: 0 10rem 0 10rem;
`;

const StyledUserCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }
`;

export default UserList;

