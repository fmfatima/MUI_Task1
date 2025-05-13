import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";
import Header from './../Header/Header';
import AboutUs from './../AboutUs/AboutUs';
import Testimonial from './../Testimonial/Testimonial';
import Footer from './../Footer/Footer';

const NavBar = () => {
  return (
    <>
    <AppBar position="static" sx={{ m: 0, p: 0, backgroundColor: 'white', color: 'black', borderRadius:'0 0 20px 20px' }}>
    <Toolbar disableGutters>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: 2}}>
        matcha
        </Typography>
        <Stack direction="row" spacing={2} sx={{ pr: 2 }}>
        <Button color="inherit">Contact Us</Button>
        <Button variant="outlined" color="primary" sx={{borderRadius:'20px', fontWeight:'700', border:'2px solid #081d85' }} >Find a Therapist</Button>
        </Stack>
    </Toolbar>
    </AppBar>
    <Header /> 
    <AboutUs/>
    <Testimonial/>
    <Footer/>

    </>
    
  );
}

export default NavBar
