import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboardPage = () => {
  const [profiles, setProfiles] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchProfiles = async () => {
      const profilesSnapshot = await db.collection('users').where('approved', '==', false).get();
      const profilesData = profilesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProfiles(profilesData);
    };

    fetchProfiles();
  }, []);

  const approveProfile = async (id) => {
    await db.collection('users').doc(id).update({ approved: true });
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.email} <button onClick={() => approveProfile(profile.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboardPage;
