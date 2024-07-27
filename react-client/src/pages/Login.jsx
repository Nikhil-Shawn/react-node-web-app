import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      rgba(238, 232, 232, 0.5),
      rgba(121, 113, 113, 0.5)
    ),
    url('https://wallpapercave.com/wp/wp7645056.jpg') center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 30px;
  width: 30%; 
  background-color: #ffffffc8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${mobile({ padding: '40px', width: '80%' })}  /* Adjust width for mobile */
`;

const Head = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  font-size: 15px;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box; /* Ensures padding is included in width */

  ${mobile({ width: '100%' })}
`;

const StyledLink = styled.a`
  cursor: pointer;
  margin-bottom: 5px;
  text-decoration: underline;

  &:hover {
    color: teal;
  }
`;

const Button = styled.button`
  color: white;
  padding: 15px;
  border: 1px solid teal;
  background-color: teal;
  width: 100%;
  margin: 20px 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:disabled {
    color: green;
    cursor: not-allowed;
  }

  &:hover:enabled {
    border: 1px solid grey;
    background-color: white;
    color: black;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log(username, password);
  };

  return (
    <Container>
      <Wrapper>
        <Head>Login</Head>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Username/Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" disabled={isFetching}>
            Login
          </Button>
        </Form>
        <StyledLink>Forgot your password?</StyledLink>
        <StyledLink>Create a new account</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Login;
