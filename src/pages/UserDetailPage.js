import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import { db } from '../firebase';
import { collection, doc, getDoc, query, where, getDocs } from 'firebase/firestore';
import '../UserDetailPage.css';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', id));
        if (userDoc.exists()) {
          const userData = { id: userDoc.id, ...userDoc.data() };
          setUser(userData);
          fetchRelatedUsers(userData.faculty);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedUsers = async (faculty) => {
      try {
        const q = query(collection(db, 'users'), where('faculty', '==', faculty));
        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          if (doc.id !== id) {
            users.push({ id: doc.id, ...doc.data() });
          }
        });
        setRelatedUsers(users);
      } catch (error) {
        console.error('Error fetching related users:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-detail-page">
      {user ? <UserDetail user={user} relatedUsers={relatedUsers} /> : <p>User not found</p>}
    </div>
  );
};

export default UserDetailPage;


