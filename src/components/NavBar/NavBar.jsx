import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

const NavBar = () => {
  return (
    <>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Matcha
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color='inherit'>Contact Us</Button>
                <Button variant="outlined" color="">Find a Therapist</Button>
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
