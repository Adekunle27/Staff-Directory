import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  db,
  storage,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../firebase.js";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LecturerProfileForm = ({ existingData }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    rank: "",
    department: "",
    faculty: "",
    office: "",
    bio: "",
    publications: "",
    links: "",
    approved: false,
    qualifications: "",
    specialization: "",
  });

  useEffect(() => {
    if (existingData) {
      setFormData({
        ...existingData,
        publications: Array.isArray(existingData.publications)
          ? existingData.publications.join("\n")
          : existingData.publications,
        links: Array.isArray(existingData.links)
          ? existingData.links.join(", ")
          : existingData.links,
      });
    }
  }, [existingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `users/${currentUser.uid}/profile.jpg`);
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);
    setFormData({ ...formData, image: photoURL });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        status: "pending",
        links: formData.links.split(",").map((link) => link.trim()), // Convert links to an array
        publications: formData.publications
          .split("\n")
          .map((pub) => pub.trim()), // Ensure each publication is on a new line
      };
      if (existingData) {
        await updateDoc(doc(db, "users", currentUser.uid), updatedData);
      } else {
        await setDoc(doc(db, "users", currentUser.uid), updatedData);
      }
      alert("Profile submitted for approval");
      navigate("/profile");
    } catch (error) {
      console.error("Error submitting profile:", error);
      alert("There was an error submitting your profile. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "users", currentUser.uid));
      alert("Profile deleted");
    } catch (error) {
      console.error("Error deleting profile:", error);
      alert("There was an error deleting your profile. Please try again.");
    }
  };

  return (
    <Container>
      <ProfileContainer>
        {formData.image && <ProfileImage src={formData.image} alt="Profile" />}
        <Form onSubmit={handleSubmit}>
          <Title>{formData.name}</Title>
          <Input type="file" onChange={handleImageUpload} />
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <p>Email Address</p>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <p>Phone Number</p>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            required
          />
          <p>Department</p>
          <Input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Department"
            required
          />
          <p>Faculty</p>
          <Select
            name="faculty"
            value={formData.faculty}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Faculty</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Clinical Science">Clinical Science</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Law">Law</option>
            <option value="EDM">EDM</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Art">Art</option>
            <option value="Social Science">Social Science</option>
            <option value="Administration">Administration</option>
          </Select>
          <p>Rank/Status</p>
          <Select
            name="rank"
            value={formData.rank}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Rank</option>
            <option value="Professor">Professor</option>
            <option value="Associate Professor">Associate Professor</option>
            <option value="Senior Lecturer">Senior Lecturer</option>
            <option value="Reader">Reader</option>
            <option value="Lecturer I">Lecturer I</option>
            <option value="Lecturer II">Lecturer II</option>
          </Select>
          <p>Qualifications</p>
          <Input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            placeholder="Your Qualifications"
            onChange={handleInputChange}
            required
          />
          <p>Area(s) of Specialization</p>
          <Input
            type="text"
            name="specialization"
            value={formData.specialization}
            placeholder="Area(s) of Specialization"
            onChange={handleInputChange}
          />
          <p>Office Location</p>
          <Input
            type="text"
            name="office"
            value={formData.office}
            placeholder="Office Location"
            onChange={handleInputChange}
          />
          <p>Bio</p>
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
          ></Textarea>
          <p>Publications (separate each publication with a new line)</p>
          <Textarea
            name="publications"
            value={formData.publications}
            onChange={handleInputChange}
            placeholder="Publications (separate each publication with a new line)"
          ></Textarea>
          <p>Links (comma-separated)</p>
          <Textarea
            name="links"
            value={formData.links}
            onChange={handleInputChange}
            placeholder="Links (comma-separated)"
          ></Textarea>
          <Button type="submit">Submit</Button>
          {existingData && (
            <Button type="button" onClick={handleDelete}>
              Delete Profile
            </Button>
          )}
        </Form>
      </ProfileContainer>
    </Container>
  );
};

export default LecturerProfileForm;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  height: 8rem;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
