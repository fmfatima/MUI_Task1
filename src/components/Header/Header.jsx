import { Typography, Button, Stack, Grid, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GetAppIcon from '@mui/icons-material/GetApp';

const Header = () => {
  return (
    <Grid 
      container 
      spacing={4} 
      alignItems="center" 
      justifyContent="center" 
      sx={{ 
        py: { xs: 4, md: 6 }, 
        px: { xs: 2, md: 4 },
        minHeight: { xs: 'auto', md: '100vh' },
        maxWidth: '100%',
      }}
    >
      
      {/* LEFT: Text and Buttons */}
      <Grid container spacing={4} item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'auto',
            width: '100%',
            maxWidth: { xs: '100%', md: '600px' },
            p: { xs: 2, md: '0.5rem' },
            // pl: { md: '1rem' },
            textAlign: { xs: 'center', md: 'left' },
            alignItems: { xs: 'center', md: 'flex-start' },
            // mx: { xs: 'auto', md: '0' }
          }}
        >
          <Typography
            variant="h2"
            color="black"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' }, fontWeight:'600'}}
          >
            Share the <span style={{ color: 'purple' }}>Health</span>
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: '0.75rem', sm: '1rem', md: '1.5rem'} }}>
            Ask, Answer and Connect: find info you need from licensed professionals and people who have been there before.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                width: 200,
                px: 1.5,
                py: 1,
                justifyContent: 'flex-start',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'white',
              }}
            >
              <AppleIcon sx={{ fontSize: 32, mr: 1, color: 'black' }} />
              <Box textAlign="left" sx={{ color: 'black' }}>
                <Typography variant="caption">Download on the</Typography>
                <Typography variant="body2" fontWeight="bold">
                  App Store
                </Typography>
              </Box>
            </Button>

            <Button
              variant="outlined"
              size="small"
              sx={{
                width: 200,
                px: 1,
                py: 1,
                justifyContent: 'flex-start',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'white',
              }}
            >
              <GetAppIcon sx={{ fontSize: 32, mr: 1, color: 'black' }} />
              <Box textAlign="left" sx={{ color: 'black' }}>
                <Typography variant="caption">Get it on</Typography>
                <Typography variant="body2" fontWeight="bold">
                  Google Play
                </Typography>
              </Box>
            </Button>
          </Stack>
        </Box>
      </Grid>

      {/* RIGHT: Image and Shadow */}
      <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%',
          position: 'relative'
        }}>
          {/* Elliptical Shadow */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -25,
              width: '100%',
              height: '40px',
              backgroundColor: 'rgba(84, 84, 84, 0.2)',
              filter: 'blur(10px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
          <Box 
            component="img"
            src="./src/assets/header.png"
            alt="Health Banner"
            sx={{
              width: { xs: '100%', sm: '80%', md: '28.875rem' },
              height: 'auto',
              maxHeight: { xs: '400px', md: '32.5rem' },
              borderRadius: '30px',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Grid>

    </Grid>
  );
};

export default Header;
