import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import UserList from '../components/UserList';
import Header from '../components/Header';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'user'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(data.slice(0, 12)); // Display only first 12 users
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <UserList search={search} users={users} />
    </div>
  );
};

export default Home;
