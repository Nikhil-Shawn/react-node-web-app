import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { sliderItems } from "../sliderdata";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: aliceblue;
  position: absolute;
  cursor: pointer;
z-index: 2;
  left: ${props=> props.direction === "left" && "10px" };
  right: ${props=> props.direction === "right" && "10px"};
`
const Wrapper = styled.div`
display: flex;
  height: 100%;
  transition: all 1.3s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
display: flex;
  height: 100vh;
  align-items: center;
  background-color: ${props=> props.bg};
`
const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
  flex: 1;
`
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
`
const Title = styled.h1`
font-size: 55px;
`
const Desc = styled.p`
width: 80%;
margin: 50px 0px;
font-weight: bold;
letter-spacing: 3px;
font-size: 20px;
`
const BUTTON = styled.button`
font-size: 20px;
background-color: transparent;
border: 2px solid grey;
padding: 20px 60px;
cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <IoIosArrowBack/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=> (
            <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <BUTTON>Shop now</BUTTON>
            </InfoContainer>
          </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <IoIosArrowForward/>
        </Arrow>
    </Container>
  )
}

export default Slider