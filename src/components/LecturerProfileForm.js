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
  getDoc,
} from "../firebase.js";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

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
    journal: "",
    category: "",
  });

  const facultyToDepartments = {
    Technology: [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],
    Science: ["Mathematics", "Physics", "Biology"],
    "Clinical Science": ["Medicine", "Nursing", "Surgery"],
    Pharmacy: ["Pharmacology", "Clinical Pharmacy"],
    Law: ["Corporate Law", "Criminal Law"],
    EDM: ["Architecture", "Estate Management"],
    Agriculture: ["Crop Science", "Animal Science"],
    Art: ["English", "History", "Philosophy"],
    "Social Science": ["Economics", "Political Science", "Psychology"],
    Administration: [
      "Accounting",
      "Business Administration",
      "Public Administration",
    ],
  };

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleFacultyChange = (e) => {
    const selectedFaculty = e.target.value;
    setFormData({ ...formData, faculty: selectedFaculty, department: "" }); // Reset department
  };

  const handleDepartmentChange = (e) => {
    setFormData({ ...formData, department: e.target.value });
  };

  // Handle changes for non-React Quill inputs
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        status: "approved",
        // Check if links is a string before splitting
        links: Array.isArray(formData.links)
          ? formData.links // Use the array as-is if it's already an array
          : formData.links.split(",").map((link) => link.trim()), // Convert to an array if it's a string
      };

      // Save data to Firestore
      const docRef = doc(db, "users", currentUser.uid);
      if (existingData) {
        await updateDoc(docRef, updatedData);
      } else {
        await setDoc(docRef, updatedData);
      }

      alert("Your Profile has been saved successfully");
      navigate("/profile");
    } catch (error) {
      console.error("Error submitting profile:", error.message);
      alert(`There was an error submitting your profile: ${error.message}`);
    }
  };

  // Handle React Quill editor changes
  const handleQuillChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (currentUser?.uid) {
      fetchUserData();
    }
  }, [currentUser]);

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
          <Title>
            {" "}
            Name: {formData.title}
            {formData.name
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Title>
          <Input type="file" onChange={handleImageUpload} />
          <p>Name (With your title e.g. Prof. Dr. Mr. Mrs. e.t.c.)</p>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your First name, then Last name"
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
            // required
          />
          <p>Faculty</p>
          <Select
            name="faculty"
            value={formData.faculty}
            onChange={handleFacultyChange}
            required
          >
            <option value="">Select Faculty</option>
            {Object.keys(facultyToDepartments).map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </Select>

          <p>Department</p>
          <Select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
            required
            disabled={!formData.faculty} // Disable if no faculty is selected
          >
            <option value="">Select Department</option>
            {formData.faculty &&
              facultyToDepartments[formData.faculty].map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
          </Select>
          <p>Staff Category</p>
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>
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
          <p>Academic Qualifications</p>
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
          <p>Office Address</p>
          <Input
            type="text"
            name="office"
            value={formData.office}
            placeholder="Office Location"
            onChange={handleInputChange}
          />
          <p>
            Career Summary/Bio (Make use of <b>Bold</b>, <em>Italics</em>,{" "}
            <u>Underline</u> for standout information)
          </p>
          <ReactQuill
            value={formData.bio}
            onChange={(value) => handleQuillChange("bio", value)}
            placeholder="Enter your career summary here"
            theme="snow"
            style={{ height: "200px", marginBottom: "50px" }}
          />
          <p>Publications (separate each publication with a new line)</p>
          <ReactQuill
            value={formData.publications}
            onChange={(value) => handleQuillChange("publications", value)}
            placeholder="Enter your publications"
            theme="snow"
            style={{ height: "190px", marginBottom: "50px" }}
          />
          <p>Creative Output (List of Journal Articles/Conference Papers)</p>
          <ReactQuill
            value={formData.journal}
            onChange={(value) => handleQuillChange("journal", value)}
            placeholder="Enter your Journals & Articles"
            theme="snow"
            style={{ height: "190px", marginBottom: "50px" }}
          />

          <p>Links (separate each of your links with a comma)</p>
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
