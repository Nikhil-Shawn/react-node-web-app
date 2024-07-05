import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { Tablet, mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  ${mobile({ padding: '5px' })}

  ${Tablet({ padding: '5px' })}
`;
const Head = styled.h1`
  font-size: 40px;
  text-align: center;

  ${mobile({ fontSize: '20px' })}
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 20px;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${(props) => props.type === 'filled' && 'white'};

  ${mobile({ padding: '10px', fontSize: '10px' })}

  ${Tablet({ padding: '15px', fontSize: '15px' })}

  &:hover {
    border: ${(props) => props.type === 'filled' && '1px solid black'};
    background-color: teal;
    color: ${(props) => (props.type === 'filled' ? 'black' : 'white')};
  }
`;
const TopTexts = styled.div``;
const Toptext = styled.span`
  font-size: 25px;
  text-decoration: underline;
  margin-right: 50px;

  ${mobile({ display: 'none' })}

  ${Tablet({ fontSize: '15px' })}
`;
const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
`;
const Product = styled.div`
  margin-bottom: 20px;
  display: flex;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.5); /* Light grey with 50% opacity */
  align-items: center;

  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;

  ${mobile({ justifyContent: 'space-between', marginBottom: '20px' })}
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ProductImage = styled.img`
  width: 180px; /* Set a fixed width */
  height: 180px; /* Set a fixed height */
  object-fit: contain; /* Ensure the whole image fits within the dimensions */
  ${mobile({ width: '100px', height: '100px' })} /* Adjust size for mobile view */
`;

const Name = styled.span``;
const ID = styled.span`
  margin: 20px 0 0 0;
`;
const Color = styled.div`
  margin: 20px 0;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: ${(props) => (props.selected ? '2px solid teal' : 'none')};
`;

const Size = styled.span``;
const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Number = styled.span`
  border-radius: 10%;
  padding: 10px;
  border: 1px solid teal;
  font-size: 30px;
`;
const Price = styled.span`
  margin-top: 40px;
  font-size: 30px;

  ${mobile({ margin: '20px 0' })}
`;
const Summary = styled.div`
  padding: 20px;
  border-radius: 5%;
  border: 0.5px solid rgba(128, 128, 128, 0.5);
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 100;
  font-size: 30px;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  font-weight: ${(props) => (props.type === 'total' ? '900' : '100')};
  font-size: ${(props) => (props.type === 'total' ? '24px' : '20px')};

  ${mobile({ margin: '20px 0' })}
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Button1 = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  background: black;
  color: white;
  width: 100%;

  &:hover {
    background-color: transparent;
    color: black;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log('Cart:', cart);
  console.log('Cart Products:', cart.products);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Head>YOUR CART</Head>
        <Top>
          <Button>CONTINUE SHOPPING</Button>
          <TopTexts>
            <Toptext>Shopping Bag ({cart.products.length})</Toptext>
            <Toptext>Wishlist (0)</Toptext>
          </TopTexts>
          <Button type="filled">CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <ProductImage src={product.img} />
                  <Detail>
                    <Name>
                      <span style={{ fontWeight: 'bold' }}>Product: </span>
                      {product.title}
                    </Name>
                    <ID>
                      <span style={{ fontWeight: 'bold' }}>ID: </span>
                      {product._id}
                    </ID>
                    <Color color={product.color} />
                    <Size>
                      <span style={{ fontWeight: 'bold' }}>Size: </span>
                      {product.size}
                    </Size>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <AmountContainer>
                    <Remove style={{ fontSize: '30px', cursor: 'pointer' }} />
                    <Number>{product.quantity}</Number>
                    <Add style={{ fontSize: '30px', cursor: 'pointer' }} />
                  </AmountContainer>
                  <Price>{product.price * product.quantity}</Price>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <Title>ORDER SUMMARY</Title>
            <SummaryItem>
              <SummaryText>SubTotal:</SummaryText>
              <SummaryPrice>{cart.total}</SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Estimated Shipping:</SummaryText>
              <SummaryPrice>$5</SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Shipping Discount:</SummaryText>
              <SummaryPrice>- $5</SummaryPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryText>Total:</SummaryText>
              <SummaryPrice>{cart.total}</SummaryPrice>
            </SummaryItem>
            <Button1>Checkout Now</Button1>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
