import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
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

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!username) {
      setUsernameError("Username/Email is required");
      isValid = false;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (isValid) {
      login(dispatch, { username, password });
      console.log(username, password);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch({ type: 'user/clearError' }); // You need to add this action in your userSlice
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  return (
    <Container>
      <Wrapper>
        <Head>Login</Head>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Username/Email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <Button type="submit" disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Wrong Username or Password</Error>}
        </Form>
        <StyledLink>Forgot your password?</StyledLink>
        <StyledLink>Create a new account</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Login;
