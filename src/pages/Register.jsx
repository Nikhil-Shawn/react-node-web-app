import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(
    rgba(212, 208, 208, 0.5),
    rgba(163, 161, 161, 0.5)
),url('https://i.imgur.com/MMaWVW6.jpeg');
background-repeat: no-repeat;
background-size: cover;

${mobile({backgroundPosition: 'center'})}
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

${mobile({padding: '40px', maxWidth: '63%'})}
`

const Head = styled.h1`
font-size: 40px;
font-weight: bold;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
font-size: 15px;
cursor: pointer;
flex: 1;
padding: 10px;
margin: 20px 10px 0px 0px;
`

const Agreement = styled.p`
margin: 10px 0px;
`
const Button = styled.button`
color: white;
padding: 15px;
border: none;
background-color: teal;
width: 100%;

&:hover{
    cursor: pointer;
    border: 1px solid grey;
    background-color: white;
    color: black;
}
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Head>CREATE AN ACCOUNT</Head>
            <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="User Mame"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            </Form>
            <Agreement>By creating an account, I agree to the following <span style={{ fontWeight: 'bold' }}>PRIVACY POLICY</span>
            </Agreement>
            <Button>Create</Button>
        </Wrapper>
    </Container>
  )
}

export default Register