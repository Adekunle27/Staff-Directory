import React from 'react';
import LecturerProfileForm from './LecturerProfileForm';
import styled from 'styled-components';

const CreateProfile = () => {
  return (
    <div>
      <Alignh2>Create Your Profile</Alignh2>
      <LecturerProfileForm />
    </div>
  );
};

export default CreateProfile;


const Alignh2 = styled.h2`
text-align:center;

`;