import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase"; // Ensure 'auth' is imported from Firebase configuration
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import google from ".././images/google-logo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const allowedDomain = "@oauife.edu.ng";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email.endsWith(allowedDomain)) {
      setError(`Only emails with the ${allowedDomain} domain are allowed.`);
      setLoading(false);
      return;
    }

    try {
      await signup(email, password, { name });

      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userRef, {
        name,
        email,
        createdAt: serverTimestamp(), // Add createdAt timestamp here
      });

      navigate("/edit-profile");
      setError("");
    } catch (error) {
      setError("Failed to sign up. Please check your details and try again.");
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const emailDomain = user.email.split("@")[1];

      if (emailDomain !== "oauife.edu.ng") {
        setError(
          `Google sign-in is only allowed for the ${allowedDomain} domain.`
        );
        await auth.signOut();
      } else {
        const userRef = doc(db, "users", user.uid);
        await setDoc(
          userRef,
          {
            name: user.displayName,
            email: user.email,
            createdAt: serverTimestamp(), // Add createdAt timestamp here
          },
          { merge: true }
        );

        navigate("/edit-profile");
      }
    } catch (error) {
      console.error("Error with Google sign-in:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <TitleInfo>Sign Up with your OAU Email Address here</TitleInfo>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader className="loader" /> : "Sign Up"}
        </Button>

        <GoogleButton
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{ marginTop: "1rem", backgroundColor: "#ccc" }}
        >
          <img
            src={google}
            style={{ width: "28px", height: "28px" }}
            alt="Google Logo"
          />{" "}
          Sign Up with Google
        </GoogleButton>

        <Footer>
          <Text>
            Already have an account? <LoginLink href="/login">Login</LoginLink>
          </Text>
        </Footer>
      </FormContainer>
    </Container>
  );
};

export default SignUp;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  padding: 1rem;

  @media (max-width: 600px) {
    padding-top: 0.5rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 5px 5px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 1rem;
    max-width: 100%;
    // box-shadow: none;
    border-radius: 8px;
    box-shadow: 5px 5px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  position: relative;
`;

const TitleInfo = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  // font-family: "Poppins", sans-serif;
  font-weight: 500;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #004d99;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e6a700;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;
const GoogleButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ccc;
  color: black;
  font-size: 1rem;
  border: black;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: #e6a700;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: ${spin} 4s infinite;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    border: 8px solid;
    border-radius: 50%;
    border-color: red red #0000 #0000;
    mix-blend-mode: darken;
    animation: ${spin} 1s infinite linear;
  }

  &::after {
    border-color: #0000 #0000 blue blue;
    animation-direction: reverse;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Text = styled.p`
  margin: 0.5rem 0;
  text-align: center;
`;

const LoginLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
