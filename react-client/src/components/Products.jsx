import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import axios from 'axios';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align items to the left */
  margin: 0 10px;

  ${mobile({ flexDirection: 'column' })}
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

  ${mobile({ width: '100%', height: '30vh', margin: '5px 0px' })}

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    ${mobile({ transform: 'scale(1.02)' })}
  }
`;

const Image = styled.img`
  height: 80%;
  z-index: 2;
`;

const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  position: absolute;
  width: 18vw;
  height: 16vw;
`;

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
`;

const Products = ({ cat, filter = {}, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:5000/api/v1/product?categories=${cat}` : "http://localhost:5000/api/v1/product"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (filter && Object.keys(filter).length > 0) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) => item[key]?.includes(value))
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container itemsCount={filteredProducts.length}>
      {filteredProducts.map((items) => (
        <ProductBox key={items.id}>
          <Image src={items.img} />
          <Circle />
          <Info>
            <Icon>
              <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
              <FavoriteIcon />
            </Icon>
            <Icon>
              <SearchIcon />
            </Icon>
          </Info>
        </ProductBox>
      ))}
    </Container>
  );
};

export default Products;
