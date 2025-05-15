import { AppBar, Stack, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Header from './../Header/Header';
import AboutUs from './../AboutUs/AboutUs';
import Testimonial from './../Testimonial/Testimonial';
import Footer from './../Footer/Footer';
import { useState } from 'react';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: 'white', 
          color: 'black',
          borderRadius: '0 0 20px 20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          width: '100%'
        }}
      >
        <Container 
          maxWidth={false}
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            width: '100%'
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: '56px', sm: '64px' },
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: { xs: 1, sm: 1.5 }
            }}
          >
            {/* Logo */}
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 700,
                color: 'primary.main'
              }}
            >
              matcha
            </Typography>

            {/* Desktop Navigation */}
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center'
              }}
            >
              <Button 
                color="inherit"
                sx={{ 
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  minWidth: 'auto',
                  px: 2
                }}
              >
                Contact Us
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  border: 2,
                  px: 3,
                  '&:hover': {
                    border: 2
                  }
                }}
              >
                Find a Therapist
              </Button>
            </Stack>

            {/* Mobile Menu */}
            <IconButton
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                ml: 'auto'
              }}
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '12px'
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose} sx={{ p: 1 }}>
                <Button 
                  color="inherit"
                  fullWidth
                  sx={{ 
                    py: 1,
                    justifyContent: 'center',
                    fontSize: '0.9rem'
                  }}
                >
                  Contact Us
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ p: 1 }}>
                <Button 
                  variant="outlined" 
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1,
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: 2,
                    '&:hover': {
                      border: 2
                    }
                  }}
                >
                  Find a Therapist
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Header />
        <AboutUs />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default NavBar;
