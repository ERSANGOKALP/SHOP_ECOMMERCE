import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 30px 0px;
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;



const Right = styled.div`
flex:1;
padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
   margin-top: 0px;
   height: 20%;
`;


const Footer = () => {
  return (
    <Container>
        <Left> 
            <Logo>ERSAN.</Logo>
            <Desc>Better job descriptions attract better candidates.
             Optimized for job board approval and SEO, our 1000+ job 
             description templates boost exposure, provide inspiration
             and speed up hiring. Rich in the right kind of content, 
             they also lead to more qualified applicants.
             </Desc>
             <SocialContainer>
             <SocialIcon color ="3B5999">
             <Facebook/>
             </SocialIcon>
             <SocialIcon color ="E4405F">
             <Instagram/>
             </SocialIcon>
             <SocialIcon color ="55ACEE">
             <Twitter/>
             </SocialIcon>
             <SocialIcon color ="E60023">
             <Pinterest/>
             </SocialIcon>
             </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Didem Sokak No:3 , Ataşehir İstanbul 34340</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 56 78</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/> contact@ersan.dev</ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRM6RMBQkScY33PqF_sYAYi4F5pc9yciIBQ&usqp=CAU"/>
        </Right>
    </Container>

  )
}

export default Footer;