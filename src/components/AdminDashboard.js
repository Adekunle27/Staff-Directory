import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  button {
    padding: 10px 20px;
    background-color: #f9f9f9;
    border: solid 1px #ccc;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    color: #000;
    transition: 0.2s;
  }
`;

const ListingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  p {
    margin: 0;
  }

  button {
    padding: 5px 10px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, select, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

const AdminDashboard = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPendingUsers(users.filter(user => user.status === 'pending'));
      setApprovedUsers(users.filter(user => user.status === 'approved'));
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData(user);
  };

  const approveUser = async (id) => {
    await updateDoc(doc(db, 'users', id), { ...formData, status: 'approved' });
    setPendingUsers(pendingUsers.filter(pendingUser => pendingUser.id !== id));
    setApprovedUsers([...approvedUsers, { ...formData, status: 'approved' }]);
    setSelectedUser(null);
    alert('User approved');
  };

  const updateUser = async (id) => {
    await updateDoc(doc(db, 'users', id), formData);
    setApprovedUsers(approvedUsers.map(user => user.id === id ? { ...formData } : user));
    setSelectedUser(null);
    alert('User updated');
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <h2>Admin Dashboard</h2>
      <AlignButton>
        <>Welcome, Admin</>
        <button onClick={handleLogout}>Logout</button>
      </AlignButton>
      <h3>Pending Approvals</h3>
      {pendingUsers.map(user => (
        <div key={user.id}>
          <ListingRow>
            <p>{user.name} - {user.email}</p>
            <button onClick={() => handleEditUser(user)}>View</button>
          </ListingRow>
          {selectedUser && selectedUser.id === user.id && (
            <FormContainer>
              <h3>Edit Details for {user.name}</h3>
              <form>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
                <input type="text" name="department" value={formData.department} onChange={handleInputChange} placeholder="Department" required />
                <input type="text" name="faculty" value={formData.faculty} onChange={handleInputChange} placeholder="Faculty" required />
                <select name="rank" value={formData.rank} onChange={handleInputChange} required>
                  <option value="">Select Rank</option>
                  <option value="Professor">Professor</option>
                  <option value="Associate Professor">Associate Professor</option>
                  <option value="Senior Lecturer">Senior Lecturer</option>
                  <option value="Reader">Reader</option>
                  <option value="Lecturer I">Lecturer I</option>
                  <option value="Lecturer II">Lecturer II</option>
                </select>
                <textarea style={{height: "15rem"}} name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio"></textarea>
                <textarea style={{height: "15rem"}} name="publications" value={formData.publications} onChange={handleInputChange} placeholder="Publications"></textarea>
                <textarea name="links" value={formData.links} onChange={handleInputChange} placeholder="Links (comma-separated)"></textarea>
              </form>
              <button style={{marginRight: "0.8rem", marginTop: "0.8rem"}} onClick={() => approveUser(user.id)}>Approve</button>
              <button onClick={() => setSelectedUser(null)}>Close</button>
            </FormContainer>
          )}
        </div>
      ))}
      <h3>Approved Lecturers</h3>
      {approvedUsers.map(user => (
        <div key={user.id}>
          <ListingRow>
            <p>{user.name} - {user.email}</p>
            <button onClick={() => handleEditUser(user)}>View</button>
          </ListingRow>
          {selectedUser && selectedUser.id === user.id && (
            <FormContainer>
              <h3>Edit Details for {user.name}</h3>
              <form>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
                <input type="text" name="department" value={formData.department} onChange={handleInputChange} placeholder="Department" required />
                <input type="text" name="faculty" value={formData.faculty} onChange={handleInputChange} placeholder="Faculty" required />
                <select name="rank" value={formData.rank} onChange={handleInputChange} required>
                  <option value="">Select Rank</option>
                  <option value="Professor">Professor</option>
                  <option value="Associate Professor">Associate Professor</option>
                  <option value="Senior Lecturer">Senior Lecturer</option>
                  <option value="Reader">Reader</option>
                  <option value="Lecturer I">Lecturer I</option>
                  <option value="Lecturer II">Lecturer II</option>
                </select>
                <textarea style={{height: "15rem"}} name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio"></textarea>
                <textarea style={{height: "15rem"}} name="publications" value={formData.publications} onChange={handleInputChange} placeholder="Publications"></textarea>
                <textarea name="links" value={formData.links} onChange={handleInputChange} placeholder="Links (comma-separated)"></textarea>
              </form>
              <button style={{marginRight: "0.8rem", marginTop: "0.8rem"}} onClick={() => updateUser(user.id)}>Update</button>
              <button onClick={() => setSelectedUser(null)}>Close</button>
            </FormContainer>
          )}
        </div>
      ))}
    </Container>
  );
};

export default AdminDashboard;
