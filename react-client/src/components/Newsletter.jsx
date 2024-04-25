import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile, mobileS } from '../responsive'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #b8d4bd;
height: 40vw;
margin: 10px 0;

${mobile({margin: '0'})}
`
const Title = styled.h1`
font-size: 55px;

${mobile({fontSize: '20px'})}
`
const Description = styled.span`
font-size: 20px;
margin: 10px 0;

${mobile({fontSize: '10px'})}
`
const SubmitContainer = styled.div`
display: flex;
width: 50%;
height: 7vh;
background-color: white;
border: 1px solid lightgray;


${mobile({height: '35px'})}

${mobileS({width: '90%', height: '30px'})}
`

const Input = styled.input`
flex: 8;
border: none;
padding-left: 10px;
`
const Button = styled.button`
background-color: teal;
flex: 1;
color: white;
&:hover {
    background-color: black;
    color: teal;
}

`


const Newsletter = () => {
  return (
    <Container>
        <Title>
            NEWSLETTER
        </Title>
        <Description>
            Get timely updated on your Favourites and Latest products
        </Description>
        <SubmitContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </SubmitContainer>
    </Container>
  )
}

export default Newsletter