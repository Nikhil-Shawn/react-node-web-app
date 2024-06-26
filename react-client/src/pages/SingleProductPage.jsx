import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { Tablet, mobile } from '../responsive';
import { publicRequest } from '../requestMethod';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  margin: 20px;
  height: 60vh;
  display: flex;
  ${mobile({ flexDirection: 'column', height: 'unset', margin: '0px' })}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f7f7f7;
`;

const Image = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  max-height: 80%; /* Ensure the image doesn't exceed its container's height */
  ${mobile({ width: '60%' })}
`;

const Title = styled.h1`
  font-size: 55px;
  ${mobile({ fontSize: '20px' })}
`;

const Price = styled.span`
  font-size: 55px;
  margin: 10px 0;
  ${mobile({ fontSize: '20px' })}
`;

const Description = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: '15px' })}
`;

const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${mobile({ margin: '0 10px' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  ${mobile({ width: 'unset', marginBottom: '20px' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const ColorFilter = styled.div`
  display: flex;
`;

const SizeFilter = styled.select`
  padding: 5px;
  border: 2px solid grey;
`;

const SizeOption = styled.option``;

const FilterText = styled.p`
  color: black;
  font-size: 20px;
  margin-right: 20px;
  ${mobile({ fontSize: '15px' })}
`;

const ColorOption = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer; /* Change cursor to pointer to indicate clickability */
`;

const AddContainer = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  ${mobile({ margin: '0 0 20px 0', width: 'unset' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  margin: 0px 5px;
  border-radius: 15%;
  padding: 10px 15px;
  border: 2px solid teal;
`;

const Button = styled.button`
  border: 2px solid teal;
  background: none;
  width: 100px;
  height: 40px;
  ${Tablet({ height: '60px' })}
  &:hover {
    background: #c6e9c826;
  }
`;

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (id) {
          console.log("Fetching product with id:", id);
          const res = await publicRequest.get(`/product/${id}`);
          console.log("Product fetched:", res.data);
          setProduct(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "asc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  // Render a loading state while the product is being fetched
  if (!product) {
    return <div>Please hold on while we get the product information...</div>;
  }

  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <ImageContainer>
          <Image src={product.img} alt={product.title} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color:</FilterText>
              <ColorFilter>
                {product.color.map((color) => (
                  <ColorOption
                    key={color}
                    color={color}
                    onClick={() => setColor(color)}
                  />
                ))}
              </ColorFilter>
            </Filter>
            <Filter>
              <FilterText>Size:</FilterText>
              <SizeFilter onChange={(e) => setSize(e.target.value)}>
                {product.size.map((size) => (
                  <SizeOption key={size}>{size}</SizeOption>
                ))}
              </SizeFilter>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("desc")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("asc")} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
