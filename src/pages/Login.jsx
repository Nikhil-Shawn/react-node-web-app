import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(
    rgba(238, 232, 232, 0.5),
    rgba(121, 113, 113, 0.5)
),url('https://wallpapercave.com/wp/wp7645056.jpg')center;
background-repeat: no-repeat;
background-size: cover;
`

const Wrapper = styled.div`
padding: 30px;
width: fit-content;
max-width: 40%;
background-color: #ffffffc8;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

${mobile({ padding: '40px', maxWidth: '63%'})}

`

const Head = styled.h1`
font-size: 40px;
font-weight: bold;
`

const Form = styled.form`
width: 95%;
`
const Input = styled.input`
font-size: 15px;
cursor: pointer;
width: 100%;
padding: 10px;
margin: 20px 10px 0px 0px;

${mobile({width: '95%'})}
`

const Link = styled.a`
cursor: pointer;
margin-bottom: 5px;
text-decoration: underline;

&:hover{
    color: teal;
}
`
const Button = styled.button`
color: white;
padding: 15px;
border: 1px solid teal;
background-color: teal;
width: 100%;
margin: 20px 0px;

&:hover{
    cursor: pointer;
    border: 1px solid grey;
    background-color: white;
    color: black;
}
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Head>Login</Head>
            <Form>
            <Input placeholder="Username/Email"/>
            <Input type="password" placeholder="Password"/>
            </Form>
            <Button>Login</Button>
            <Link>Forgot your password?</Link>
            <Link>Create a new account</Link>
        </Wrapper>
    </Container>
)
}

export default Login