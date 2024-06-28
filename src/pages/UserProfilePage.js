// import React, { useEffect, useState } from 'react';
// import { db, doc, getDoc, deleteDoc } from '../firebase';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 0;

//   @media (min-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ProfileImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #f9f9f9;
//   border: solid 1px #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
//   color: #000;
//   transition: 0.2s;

//   @media (max-width: 767px) {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `;

// const ProfileDetails = styled.div`
//   flex: 2;
//   padding-left: 20px;

//   h2 {
//     font-size: 2em;
//   }

//   button {
//     margin: 10px 0;
//   }

//   @media (max-width: 767px) {
//     padding-left: 0;
//   }
// `;

// const AlignButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;

//   @media (max-width: 767px) {
//     flex-direction: column;
//     align-items: stretch;

//     div {
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//     }
//   }
// `;

// const AlignLoading = styled.div`
//   text-align: center;
// `;

// const UserProfilePage = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const profileDoc = await getDoc(doc(db, 'users', currentUser.uid));
//       if (profileDoc.exists()) {
//         setProfileData(profileDoc.data());
//       }
//       setLoading(false);
//     };
//     fetchProfile();
//   }, [currentUser]);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/login');
//     } catch (error) {
//       console.error('Failed to log out', error);
//     }
//   };

//   const handleDeleteProfile = async () => {
//     try {
//       await deleteDoc(doc(db, 'users', currentUser.uid));
//       alert('Profile deleted');
//       setProfileData(null);
//       navigate('/create-profile');
//     } catch (error) {
//       console.error('Failed to delete profile', error);
//     }
//   };

//   if (loading) {
//     return <AlignLoading>Loading...</AlignLoading>;
//   }

//   return (
//     <Container>
//       <h2>Your Profile</h2>
//       <p>Welcome, {profileData.name}</p>
//       <AlignButton>
//         <Button onClick={() => navigate('/edit-profile')}>Edit your profile</Button>
//         <div>
//           <Button onClick={handleDeleteProfile}>Delete your profile</Button>
//           <Button onClick={handleLogout}>Logout</Button>
//         </div>
//       </AlignButton>
//       <ProfileContainer>
//         <ProfileImage>
//           {profileData.image && <img src={profileData.image} alt="Profile" />}
//           <p>Status: {profileData.rank}</p>
//         </ProfileImage>
//         <ProfileDetails>
//           <h2>{profileData.name}</h2>
//           <p><strong>Phone Number:</strong> {profileData.phone}</p>
//           <p><strong>Email Address:</strong> {profileData.email}</p>
//           <p><strong>Faculty:</strong> {profileData.faculty}</p>
//           <p><strong>Department:</strong> {profileData.department}</p>
//           <p><strong>Qualifications:</strong> {profileData.qualifications}</p>
//           <h3>Brief About Me:</h3>
//           <p>{profileData.bio}</p>
//           <h3>Publications:</h3>
//           <p>{profileData.publications}</p>
//           <h3>Links</h3>
//           <p>{profileData.links}</p>
//         </ProfileDetails>
//       </ProfileContainer>
//     </Container>
//   );
// };

// export default UserProfilePage;


// import React, { useEffect, useState } from 'react';
// import { db, doc, getDoc, deleteDoc } from '../firebase';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 0 20px 0; 
// `;

// const ProfileImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #f9f9f9;
//   border: solid 1px #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
//   color: #000;
//   transition: 0.2s;
// `;

// const ProfileDetails = styled.div`
//   flex: 2;
//   padding-left: 20px;

//   h2 {
//     font-size: 2em;
//   }

//   button {
//     margin: 10px 0;
//   }
// `;

// const AlignButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const AlignLoading = styled.div`
//   text-align: center;
// `;

// const UserProfilePage = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const docRef = doc(db, 'users', currentUser.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setProfileData(docSnap.data());
//       }
//       setLoading(false);
//     };

//     fetchUserData();
//   }, [currentUser]);

//   const handleDelete = async () => {
//     try {
//       const confirmDelete = window.confirm(
//         'Are you sure you want to delete your profile? This action cannot be undone.'
//       );
//       if (confirmDelete) {
//         await deleteDoc(doc(db, 'users', currentUser.uid));
//         await logout();
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error deleting profile:', error);
//       alert('An error occurred while deleting your profile. Please try again.');
//     }
//   };

//   if (loading) {
//     return <AlignLoading>Loading...</AlignLoading>;
//   }

//   if (!profileData) {
//     return <AlignLoading>No profile data found.</AlignLoading>;
//   }

//   return (
//     <Container>
//       <ProfileContainer>
//         <ProfileImage>
//           <img src={profileData.image} alt="Profile" />
//         </ProfileImage>
//         <ProfileDetails>
//           <h2>{profileData.name}</h2>
//           <p>Email: {profileData.email}</p>
//           <p>Phone: {profileData.phone}</p>
//           <p>Rank: {profileData.rank}</p>
//           <p>Department: {profileData.department}</p>
//           <p>Faculty: {profileData.faculty}</p>
//           <p>Bio: {profileData.bio}</p>
//           <p>Qualifications: {profileData.qualifications}</p>
//           <h3>Publications:</h3>
//           <ul>
//             {profileData.publications.split('\n').map((publication, index) => (
//               <li key={index}>{publication}</li>
//             ))}
//           </ul>
//           <h3>Links:</h3>
//           <ul>
//             {profileData.links.map((link, index) => (
//               <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
//             ))}
//           </ul>
//           <AlignButton>
//             <Button onClick={() => navigate('/edit-profile')}>Edit Profile</Button>
//             <Button onClick={handleDelete}>Delete Profile</Button>
//           </AlignButton>
//         </ProfileDetails>
//       </ProfileContainer>
//     </Container>
//   );
// };

// export default UserProfilePage;

// import React, { useEffect, useState } from 'react';
// import { db, doc, getDoc, deleteDoc } from '../firebase';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 0 20px 0; 
// `;

// const ProfileImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #f9f9f9;
//   border: solid 1px #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
//   color: #000;
//   transition: 0.2s;
// `;

// const ProfileDetails = styled.div`
//   flex: 2;
//   padding-left: 20px;

//   h2 {
//     font-size: 2em;
//   }

//   button {
//     margin: 10px 0;
//   }
// `;

// const AlignButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const AlignLoading = styled.div`
//   text-align: center;
// `;

// const UserProfilePage = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const docRef = doc(db, 'users', currentUser.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         // Ensure links is an array
//         data.links = Array.isArray(data.links) ? data.links : data.links.split(',').map(link => link.trim());
//         setProfileData(data);
//       }
//       setLoading(false);
//     };

//     fetchUserData();
//   }, [currentUser]);

//   const handleDelete = async () => {
//     try {
//       const confirmDelete = window.confirm(
//         'Are you sure you want to delete your profile? This action cannot be undone.'
//       );
//       if (confirmDelete) {
//         await deleteDoc(doc(db, 'users', currentUser.uid));
//         await logout();
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error deleting profile:', error);
//       alert('An error occurred while deleting your profile. Please try again.');
//     }
//   };

//   if (loading) {
//     return <AlignLoading>Loading...</AlignLoading>;
//   }

//   if (!profileData) {
//     return <AlignLoading>No profile data found.</AlignLoading>;
//   }

//   return (
//     <Container>
//       <ProfileContainer>
//         <ProfileImage>
//           <img src={profileData.image} alt="Profile" />
//         </ProfileImage>
//         <ProfileDetails>
//           <h2>{profileData.name}</h2>
//           <p>Email: {profileData.email}</p>
//           <p>Phone: {profileData.phone}</p>
//           <p>Rank: {profileData.rank}</p>
//           <p>Department: {profileData.department}</p>
//           <p>Faculty: {profileData.faculty}</p>
//           <p>Bio: {profileData.bio}</p>
//           <p>Qualifications: {profileData.qualifications}</p>
//           <h3>Publications:</h3>
//           <ul>
//             {profileData.publications.split('\n').map((publication, index) => (
//               <li key={index}>{publication}</li>
//             ))}
//           </ul>
//           <h3>Links:</h3>
//           <ul>
//             {profileData.links.map((link, index) => (
//               <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
//             ))}
//           </ul>
//           <AlignButton>
//             <Button onClick={() => navigate('/edit-profile')}>Edit Profile</Button>
//             <Button onClick={handleDelete}>Delete Profile</Button>
//           </AlignButton>
//         </ProfileDetails>
//       </ProfileContainer>
//     </Container>
//   );
// };

// export default UserProfilePage;

// import React, { useEffect, useState } from 'react';
// import { db, doc, getDoc, deleteDoc } from '../firebase';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 0;

//   @media (min-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ProfileImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #f9f9f9;
//   border: solid 1px #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
//   color: #000;
//   transition: 0.2s;

//   @media (max-width: 767px) {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `;

// const ProfileDetails = styled.div`
//   flex: 2;
//   padding-left: 20px;

//   h2 {
//     font-size: 2em;
//   }

//   button {
//     margin: 10px 0;
//   }

//   @media (max-width: 767px) {
//     padding-left: 0;
//   }
// `;

// const AlignButton = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;

//   @media (max-width: 767px) {
//     flex-direction: column;
//     align-items: stretch;

//     div {
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//     }
//   }
// `;

// const AlignLoading = styled.div`
//   text-align: center;
// `;

// const UserProfilePage = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const profileDoc = await getDoc(doc(db, 'users', currentUser.uid));
//       if (profileDoc.exists()) {
//         const data = profileDoc.data();
//         // Ensure links is an array
//         data.links = Array.isArray(data.links) ? data.links : data.links.split(',').map(link => link.trim());
//         setProfileData(data);
//       }
//       setLoading(false);
//     };
//     fetchProfile();
//   }, [currentUser]);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/login');
//     } catch (error) {
//       console.error('Failed to log out', error);
//     }
//   };

//   const handleDeleteProfile = async () => {
//     try {
//       await deleteDoc(doc(db, 'users', currentUser.uid));
//       alert('Profile deleted');
//       setProfileData(null);
//       navigate('/create-profile');
//     } catch (error) {
//       console.error('Failed to delete profile', error);
//     }
//   };

//   if (loading) {
//     return <AlignLoading>Loading...</AlignLoading>;
//   }

//   return (
//     <Container>
//       <h2>Your Profile</h2>
//       <p>Welcome, {profileData.name}</p>
//       <AlignButton>
//         <Button onClick={() => navigate('/edit-profile')}>Edit your profile</Button>
//         <div>
//           <Button onClick={handleDeleteProfile}>Delete your profile</Button>
//           <Button onClick={handleLogout}>Logout</Button>
//         </div>
//       </AlignButton>
//       <ProfileContainer>
//         <ProfileImage>
//           {profileData.image && <img src={profileData.image} alt="Profile" />}
//           <p>Status: {profileData.rank}</p>
//         </ProfileImage>
//         <ProfileDetails>
//           <h2>{profileData.name}</h2>
//           <p><strong>Phone Number:</strong> {profileData.phone}</p>
//           <p><strong>Email Address:</strong> {profileData.email}</p>
//           <p><strong>Faculty:</strong> {profileData.faculty}</p>
//           <p><strong>Department:</strong> {profileData.department}</p>
//           <p><strong>Qualifications:</strong> {profileData.qualifications}</p>
//           <h3>Brief About Me:</h3>
//           <p>{profileData.bio}</p>
//           <h3>Publications:</h3>
//           <ul>
//             {profileData.publications.split('\n').map((publication, index) => (
//               <li key={index}>{publication}</li>
//             ))}
//           </ul>
//           <h3>Links</h3>
//           <ul>
//             {profileData.links.map((link, index) => (
//               <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
//             ))}
//           </ul>
//         </ProfileDetails>
//       </ProfileContainer>
//     </Container>
//   );
// };

// export default UserProfilePage;


import React, { useEffect, useState } from 'react';
import { db, doc, getDoc, deleteDoc } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f9f9f9;
  border: solid 1px #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  color: #000;
  transition: 0.2s;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ProfileDetails = styled.div`
  flex: 2;
  padding-left: 20px;

  h2 {
    font-size: 2em;
  }

  button {
    margin: 10px 0;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const AlignLoading = styled.div`
  text-align: center;
`;

const UserProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (profileDoc.exists()) {
        const data = profileDoc.data();
        // Ensure links is an array
        data.links = Array.isArray(data.links) ? data.links : data.links.split(',').map(link => link.trim());
        // Ensure publications is a string
        data.publications = Array.isArray(data.publications) ? data.publications.join('\n') : data.publications;
        setProfileData(data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      await deleteDoc(doc(db, 'users', currentUser.uid));
      alert('Profile deleted');
      setProfileData(null);
      navigate('/create-profile');
    } catch (error) {
      console.error('Failed to delete profile', error);
    }
  };

  if (loading) {
    return <AlignLoading>Loading...</AlignLoading>;
  }

  return (
    <Container>
      <h2>Your Profile</h2>
      <p>Welcome, {profileData.name}</p>
      <AlignButton>
        <Button onClick={() => navigate('/edit-profile')}>Edit your profile</Button>
        <div>
          <Button onClick={handleDeleteProfile}>Delete your profile</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </AlignButton>
      <ProfileContainer>
        <ProfileImage>
          {profileData.image && <img src={profileData.image} alt="Profile" />}
          <p>Status: {profileData.rank}</p>
        </ProfileImage>
        <ProfileDetails>
          <h2>{profileData.name}</h2>
          <p><strong>Phone Number:</strong> {profileData.phone}</p>
          <p><strong>Email Address:</strong> {profileData.email}</p>
          <p><strong>Faculty:</strong> {profileData.faculty}</p>
          <p><strong>Department:</strong> {profileData.department}</p>
          <p><strong>Qualifications:</strong> {profileData.qualifications}</p>
          <h3>Brief About Me:</h3>
          <p>{profileData.bio}</p>
          <h3>Publications:</h3>
          <ul>
            {profileData.publications.split('\n').map((publication, index) => (
              <li key={index}>{publication}</li>
            ))}
          </ul>
          <h3>Links</h3>
          <ul>
            {profileData.links.map((link, index) => (
              <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
        </ProfileDetails>
      </ProfileContainer>
    </Container>
  );
};

export default UserProfilePage;
