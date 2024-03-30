import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Products from "../components/Products"
import { mobile } from "../responsive"



const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
`
const Head = styled.h1`
font-size: 55px;
margin: 20px 0px 0px 20px;
`

const Filter = styled.div`
margin: 20px 0px;

${mobile({display: 'flex', flexDirection: 'column'})}
`
const FilterText = styled.span`
margin-right: 20px;
font-size: 20px;
${mobile({fontSize: '16px'})}
`

const Select = styled.select`
font-size: 20px;
margin-right: 20px;
padding: 10px;

${mobile({fontSize: '16px', marginTop: '15px'})}
`
const Option = styled.option`
font-size: 22px;

`

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Head>
                Clothes
            </Head>
        <FilterContainer>
            <Filter><FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Grey</Option>
                    <Option>Brown</Option>
                    <Option>Purple</Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                    <Option disabled selected>Date/Price</Option>
                    <Option>Newest</Option>
                    <Option>Price(Asc)</Option>
                    <Option>Price(Desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default ProductPage