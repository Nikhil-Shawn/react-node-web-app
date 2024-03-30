import React from 'react'
import { categories } from '../sliderdata'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
align-items: center;
height: 45vw;
${mobile({marginTop:'20px',height: '100vh'})}
`
const CategoryOuterBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
    height: 44vw;
    ${mobile({height: '100vh', flexDirection: 'column', alignItems: 'unset'})}
`
const CategoryInnerBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex: 1;
height: 40vw;
background: url(${props=>props.bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: 0 5px;

${mobile({backgroundPosition: 'unset', margin: '0.5px 0px'})}

`
const Title = styled.h1`
font-size: 2.5vw;
color: white;
margin-bottom: 10px;

`
const Button = styled.button`
background-color: white;
border: none;
padding: 15px 40px;
color: grey;
cursor: pointer;
`

const Categories = () => {
  return (
    <Container>
        <CategoryOuterBox>
                {categories.map((items) => ( 
                <CategoryInnerBox bg={items.img} key={items.id}>
                <Title>{items.title}</Title>
                <Button>SHOP NOW</Button>
                </CategoryInnerBox>
                ))}
        </CategoryOuterBox>
    </Container>
  )
}

export default Categories