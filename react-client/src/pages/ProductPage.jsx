import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Head = styled.h1`
  font-size: 55px;
  margin: 20px 0px 0px 20px;
`;

const Filter = styled.div`
  margin: 20px 0px;

  ${mobile({ display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  ${mobile({ fontSize: '16px' })}
`;

const Select = styled.select`
  font-size: 20px;
  margin-right: 20px;
  padding: 10px;

  ${mobile({ fontSize: '16px', marginTop: '15px' })}
`;

const Option = styled.option`
  font-size: 22px;
`;

const ProductPage = () => {
  const location = useLocation();
  const [cat, setCat] = useState("");
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setCat(params.get("categories") || "");
  }, [location]);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Head>Clothes</Head>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>grey</Option>
            <Option>brown</Option>
            <Option>purple</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Date/Price</Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(Asc)</Option>
            <Option value="dsc">Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
