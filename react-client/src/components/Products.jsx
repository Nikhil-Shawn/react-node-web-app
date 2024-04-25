import React from 'react'
import styled from 'styled-components'
import { product } from '../sliderdata'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile, mobileS } from '../responsive';


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Distribute items evenly */
  margin: 0 10px;
  
  ${mobile({ flexDirection: 'column'})}
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;

`;

const ProductBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: calc(25% - 20px); /* 25% width for 4 items per row with margin */
  height: 22vw;
  background-color: aliceblue;
  transition: all 0.5s ease;

  ${mobile({ width: '100%', height: '30vh', margin: '5px 0px'})}

&:hover ${Info} {
  opacity: 1;
}

&:hover {
  z-index: 2;
  transform: scale(1.05);
  ${mobile({ transform: 'scale(1.02)'})}
}

`
const Image = styled.img`
height: 80%;
z-index: 2;


`
const Circle = styled.div`
background-color: white;
border-radius: 50%;
position: absolute;
width: 18vw;
height: 16vw;
`

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 15px;
border-radius: 50%;
background-color: white;
padding: 5px;
transition: all 0.5s ease;
cursor: pointer;

&:hover {
  background-color: #e3e1e1;
  transform: scale(1.1);
}
`

const Products = () => {
  return (
    <Container>
            {product.map((items)=>(
            <ProductBox key={items.key}>
            <Image src={items.img}/>
            <Circle/>
            <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteIcon/>
            </Icon>
            <Icon>
            <SearchIcon/>
            </Icon>
            </Info>
        </ProductBox>
            ))}
    </Container>
  )
}

export default Products