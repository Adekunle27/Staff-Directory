// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useAuth } from '../contexts/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       setError('');
//     } catch (error) {
//       setError('Failed to log in. Please check your email and password.');
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <Container>
//       <FormContainer onSubmit={handleSubmit}>
//         <Title>Sign In</Title>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//         <Input 
//           type="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder="Email" 
//           required 
//         />
//         <Input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Password" 
//           required 
//         />
//         <Button type="submit">Sign In</Button>
//         <Footer>
//           <Text>Don't have an account yet? <RegisterLink href="/signup">Register</RegisterLink></Text>
//           <ForgotPasswordLink href="/forgot-password">Forgot password?</ForgotPasswordLink>
//         </Footer>
//       </FormContainer>
//     </Container>
//   );
// };

// export default Login;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f9f9f9;
//   padding: 1rem; /* Ensure padding for smaller screens */

//   @media (max-width: 600px) {
//     padding-top: 0.5rem; /* Reduce padding-top for mobile devices */
//   }
// `;

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffffff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;

//   @media (max-width: 600px) {
//     padding: 0 1rem 1rem 1rem;
//     max-width: 100%;
//     box-shadow: none; /* Remove shadow for mobile */
//   }
// `;

// const Title = styled.h2`
//   margin-bottom: 1rem;
//   color: #333;
//   text-align: center; /* Center align text for mobile */
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;

//   @media (max-width: 600px) {
//     padding: 0.5rem;
//     font-size: 0.875rem;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #004d99;
//   color: #fff;
//   font-size: 1rem;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #808080;
//   }

//   @media (max-width: 600px) {
//     padding: 0.5rem;
//     font-size: 0.875rem;
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   margin-bottom: 1rem;
//   text-align: center; /* Center align text for mobile */
// `;

// const Footer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const Text = styled.p`
//   margin: 0.5rem 0;
//   text-align: center; /* Center align text for mobile */
// `;

// const RegisterLink = styled.a`
//   color: #004d99;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ForgotPasswordLink = styled.a`
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;


import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      await login(email, password);
      setError('');
    } catch (error) {
      setError('Failed to log in. Please check your email and password.');
      console.error('Error logging in:', error);
    } finally {
      setLoading(false); // Set loading to false after the process completes
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
          {loading ? <Loader className="loader" /> : 'Sign In'}
        </Button>
        <Footer>
          <Text>Don't have an account yet? <RegisterLink href="/signup">Register</RegisterLink></Text>
          <ForgotPasswordLink href="/forgot-password">Forgot password?</ForgotPasswordLink>
        </Footer>
      </FormContainer>
    </Container>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 1rem; /* Ensure padding for smaller screens */

  @media (max-width: 600px) {
    padding-top: 0.5rem; /* Reduce padding-top for mobile devices */
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 0 1rem 1rem 1rem;
    max-width: 100%;
    box-shadow: none; /* Remove shadow for mobile */
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
  text-align: center; /* Center align text for mobile */
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
    background-color: #808080;
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

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center; /* Center align text for mobile */
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Text = styled.p`
  margin: 0.5rem 0;
  text-align: center; /* Center align text for mobile */
`;

const RegisterLink = styled.a`
  color: #004d99;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
