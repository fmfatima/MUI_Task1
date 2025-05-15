import { AppBar, Stack, Toolbar, Typography, Button, ToggleButton, ToggleButtonGroup, Container, Box, Divider } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Footer = () => {
    const [selected, setSelected] = useState([]);

    const handleChange = (event, newSelected) => {
        setSelected(newSelected);
    };

    return (
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: 'white', 
            color: 'black', 
            borderRadius: '20px 20px 0 0',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
            width: '100%'
          }}
        >
          <Container 
            maxWidth={false}
            sx={{
              width: '100%',
              px: { xs: 2, sm: 3, md: 4 }
            }}
          >
            {/* Upper Section */}
            <Toolbar 
              disableGutters
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'center', sm: 'flex-start' },
                py: { xs: 2.5, sm: 3 },
                gap: { xs: 2.5, sm: 0 }
              }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }} 
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  alignItems: { xs: 'center', sm: 'flex-start' }
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '& a': {
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <a href="#">Match With A Provider</a>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '& a': { color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } } }}>
                  <a href="#">About Us</a>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '& a': { color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } } }}>
                  <a href="#">Services</a>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '& a': { color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } } }}>
                  <a href="#">Contact Us</a>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '& a': { color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } } }}>
                  <a href="#">Careers</a>
                </Typography>
              </Stack>

              <Button 
                color="primary"
                endIcon={<FavoriteIcon sx={{ color: '#1976d2' }} />}
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  whiteSpace: 'nowrap',
                  minWidth: 'auto'
                }}
              >
                Follow Us
              </Button>
            </Toolbar>

            <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />

            {/* Lower Section */}
            <Toolbar 
              disableGutters
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'center', sm: 'center' },
                py: { xs: 2.5, sm: 3 },
                gap: { xs: 2.5, sm: 0 }
              }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, sm: 3 }} 
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  alignItems: { xs: 'center', sm: 'center' }
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.85rem', sm: '0.9rem' }
                  }}
                >
                  © 2022 matcha, Inc
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    '& a': {
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <a href="#">Privacy</a>
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    '& a': {
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <a href="#">Terms & Conditions</a>
                </Typography>
              </Stack>

              <ToggleButtonGroup 
                value={selected} 
                onChange={handleChange} 
                aria-label="social media"
                size="small" 
                sx={{
                  '& .MuiToggleButton-root': {
                    border: 'none',
                    color: 'text.secondary',
                    p: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.04)',
                      color: 'primary.main'
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.04)',
                        color: 'primary.main'
                      }
                    }
                  }
                }}
              >
                <ToggleButton value="instagram" aria-label="instagram">
                  <InstagramIcon />
                </ToggleButton>
                <ToggleButton value="twitter" aria-label="twitter">
                  <TwitterIcon />
                </ToggleButton>
                <ToggleButton value="linkedin" aria-label="linkedin">
                  <LinkedInIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default Footer;
