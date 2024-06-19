import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 8px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserCard = ({ user }) => (
  <Card>
    <Image src={user.image} alt={user.name} />
    <h2>{user.name}</h2>
    <Details>
      <DetailItem>
        <span>Faculty:</span> <span>{user.faculty}</span>
      </DetailItem>
      <DetailItem>
        <span>Department:</span> <span>{user.department}</span>
      </DetailItem>
      <DetailItem>
        <span>Email:</span> <span>{user.email}</span>
      </DetailItem>
      <DetailItem>
        <span>Phone:</span> <span>{user.phone}</span>
      </DetailItem>
    </Details>
    <Link to={`/user/${user.id}`}>View Details</Link>
  </Card>
);

export default UserCard;
