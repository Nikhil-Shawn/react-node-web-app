import React from 'react'
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import { TbHexagonLetterN } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Container = styled.div`
height: 73px;
${mobile({ height: '50px', marginBottom: '20px' })}
`
const Wrapper = styled.div`
padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({display: 'flex'})}
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 10px;
  display: flex;
  padding: 4px;
  ${mobile({marginLeft: '0px',padding: '2px'})}
`
const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
`
const Center = styled.div`
justify-content: center;
display: flex;
align-items: center;
  flex: 1;
  ${mobile({ justifyContent: 'end'})}
`
const Logo = styled(TbHexagonLetterN)`
width: 55px;
  height: 55px;
  ${mobile({width: '45px'})}

`
const Right = styled.div`
display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex: 2, justifyContent: 'center'})}
`
const MenuItemRight = styled.div`
font-size: 16px;
cursor: pointer;
margin-left: 25px;
${mobile({marginLeft: '8px',fontSize: "10px"})}
`

export const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  console.log(quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
          <IoSearch style={{color: "gray", fontSize: "18px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Logo />
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <MenuItemRight>REGISTER</MenuItemRight>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <MenuItemRight>LOGIN</MenuItemRight>
          </Link>
          <MenuItemRight>
          <Badge badgeContent={quantity} color="primary">
          <MdOutlineShoppingCart size={20}/>
          </Badge>
          </MenuItemRight>
        </Right>
  
        </Wrapper>
    </Container>
  ) 
}

export default Navbar;