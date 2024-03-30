import {AddBusinessOutlined, CardGiftcardOutlined, Facebook, Instagram, Mail, Payment, Phone, RoomOutlined, Twitter, WhatsApp } from "@mui/icons-material"
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 30px;

${mobile({margin: '0px 0px', flexDirection: 'column'})}
`
const Left = styled.div`
margin: 0px 40px 0px 0px;
flex: 1;

${mobile({margin: '0', background: '#f7dfdf', padding: '5px'})}
`
const Center = styled.div`
display: flex;
flex: 1;
flex-direction: column;

${mobile({margin: '10px 0', padding: '5px'})}
`
const Right = styled.div`
flex: 1;

${mobile({ background: '#f7dfdf', padding: '5px'})}
`
const Head = styled.h1`
font-size: 30px;

${mobile({fontSize: '15px', })}

`
const Description = styled.p`
font-size: 20px;
margin: 20px 0;

${mobile({fontSize: '10px'})}
`

const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-wrap: wrap ;
margin-bottom: 30px;


${mobile({margin: '0'})}
`
const ListItem = styled.li`
width: 35%;
margin: 12px 0;
padding: 0;

${mobile({fontSize: '10px'})}
`

const Title = styled.h1`
text-align: left!important;

${mobile({fontSize: '15px'})}
`
const ContactItem = styled.ul`
margin-bottom: 12px;
padding: 0;
display: flex;
align-items: center;

${mobile({fontSize: '10px'})}
`

const Footer = () => {
  return (
    <Container>
        <Left>
           <Head>
            Nikhil's React & Node E-commerce Web App
           </Head>
           <Description>
            Get the latest fashion from here for the most cheap price. Hurry up! The stocks are limited. The best and the cheapest here at Nikhil's Web app.
            Summer, Winter and Spring sale are also there all around the year.
           </Description>
            <Facebook  />
            <Instagram style={{ margin: '0 10px' }} />
            <WhatsApp style={{ marginRight: '10px' }} />
            <Twitter  />
        </Left>
        <Center>
        <Title>
            Useful Links
           </Title>
            <List>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Man Fashion
                </ListItem>
                <ListItem>
                    Woman Fashion
                </ListItem>
                <ListItem>
                    Order Tracking
                </ListItem>
                <ListItem>
                    Wishlist
                </ListItem>
                <ListItem>
                    Accessories
                </ListItem>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Man Fashion
                </ListItem>
                <ListItem>
                    Woman Fashion
                </ListItem>
                <ListItem>
                    Order Tracking
                </ListItem>
                <ListItem>
                    Wishlist
                </ListItem>
            </List>
        </Center>
        <Right>
            <Title style={{marginBottom: '20px'}}>
                    Contact
                </Title>
                <ContactItem>
                    <RoomOutlined style={{ marginRight: '10px'}}/>
                    Mannheim. 68229, Friedrichsfeld süd, Flamlanderstraße 12.
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px'}}/>
                    +49 178 6602329
                </ContactItem>
                <ContactItem>
                    <Mail style={{ marginRight: '10px'}}/>
                    nikhilchavan081998de@gmail.com
                </ContactItem>
                <Payment/>
                <PaymentsOutlinedIcon  style={{ margin: '0 10px'}}/>
                <AddBusinessOutlined  style={{ marginRight: '10px'}}/>
                <CardGiftcardOutlined/>
        </Right>
    </Container>
  )
}

export default Footer