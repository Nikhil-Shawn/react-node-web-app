import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { Tablet, mobile } from '../responsive'
import { publicRequest } from '../requestMethod';
import { useLocation } from 'react-router-dom'

const Container = styled.div`
margin: 20px;
height: 60vh;
display: flex;

${mobile({flexDirection: 'column', height: 'unset', margin: '0px'})}
`

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
background-color: #f7f7f7;
`

const Image = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  max-height: 80%; /* Ensure the image doesn't exceed its container's height */
  
  ${mobile({width: '60%'})}
`

const Title = styled.h1`
font-size: 55px;

${mobile({fontSize: '20px'})}
`

const Price = styled.span`
font-size: 55px;
margin: 10px 0;

${mobile({fontSize: '20px'})}
`
const Description = styled.span`
font-size: 20px;

${mobile({fontSize: '15px'})}
`
const InfoContainer = styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
flex: 1;

${mobile({margin: '0 10px'})}

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 40%;

${mobile({width: 'unset',marginBottom: '20px'})}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const ColorFilter = styled.div`
display: flex;
`

const SizeFilter = styled.select`
padding: 5px;
border: 2px solid grey;
`

const SizeOption = styled.option`

`

const FilterText = styled.p`
color: black;
font-size: 20px;
margin-right: 20px;

${mobile({fontSize: '15px'})}
`

const ColorOption = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background: ${props => props.color};
margin: 0px 5px;

`

const AddContainer = styled.div`
margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    

    ${mobile({margin: '0 0 20px 0', width:'unset'})}
    
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const Amount = styled.span`
margin: 0px 5px;
border-radius: 15%;
padding: 10px 15px;
border: 2px solid teal;

`

const Button = styled.button`
border: 2px solid teal;
background: none;
width: 100px;
height: 40px;

${Tablet({height: '60px'})}

&:hover{
    background: #c6e9c826;
}
`

const SingleProductPage = () => {
    const location = useLocation();
    const [id, setId] = useState("");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setId(params.get("categories") || "");
      }, [location]);

    
      useEffect(() => {
        const getProduct = async () => {
          try {
            if (id) {
            console.log("hey" +id)
              const res = await publicRequest.get(`/product/${id}`);
              console.log(res)
              setProduct(res.data);
            }
          } catch (error) {
            console.log(error);
          }
        };
        getProduct();
      }, [id]);
    

  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Container>
            <ImageContainer>
                <Image src="https://www.pngitem.com/pimgs/m/131-1310898_jeans-shirt-model-png-transparent-png.png"/>
            </ImageContainer>
            <InfoContainer>
                <Title>
                    Denim Pants
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla debitis tempore consequatur quam placeat, temporibus error in reprehenderit eum impedit itaque! Repudiandae temporibus at omnis. Accusamus error harum modi atque.
                </Description>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                <FilterText>Color:</FilterText>
                    <ColorFilter>
                    <ColorOption color="black"/>
                    <ColorOption color="red"/>
                    <ColorOption color="blue"/>
                    </ColorFilter>
                    </Filter>
                    <Filter>
                    <FilterText>Size:</FilterText>
                    <SizeFilter>
                        <SizeOption>S</SizeOption>
                        <SizeOption>M</SizeOption>
                        <SizeOption>L</SizeOption>
                        <SizeOption>XL</SizeOption>
                        <SizeOption>XXL</SizeOption>
                    </SizeFilter>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Container>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default SingleProductPage