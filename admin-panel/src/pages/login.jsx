// Login.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url('https://source.unsplash.com/1600x900/?nature,water') center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: #ffffffc8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;

  &:focus {
    outline: none;
    background-color: #eaeaea;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005f5f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin-top: 15px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: #333;

  &:hover {
    color: teal;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);

    // Example login logic
    if (username === 'admin' && password === 'password') {
      console.log('Logged in');
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          {error && <ErrorMessage>Invalid Username or Password</ErrorMessage>}
        </Form>
        <Link>Forgot your password?</Link>
        <Link>Create a new account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
