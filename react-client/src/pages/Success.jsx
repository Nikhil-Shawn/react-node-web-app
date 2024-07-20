import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Message = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkcyan;
  }
`;

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <MainContent>
        <Message>
          {location.state && location.state.data
            ? `Payment was successful! Your order ID is ${location.state.data.id}`
            : 'Payment was successful!'}
        </Message>
        <Button onClick={handleContinueShopping}>Continue Shopping</Button>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default Success;
