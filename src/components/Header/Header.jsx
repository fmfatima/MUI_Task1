import { Typography, Button, Stack, Grid, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GetAppIcon from '@mui/icons-material/GetApp';

const Header = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ py: 6, px: 4 }}>
      
      
      <Grid item xs={12} md={6}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
          height: '100%', p: { xs: 2, md: 4 }, textAlign: 'start', }} >
            
          <Typography variant="h2" color="primary" gutterBottom>
            Share the <span style={{ color: 'purple' }}>Health</span>
          </Typography>

          <Typography variant="body1" sx={{ mb: 4}}>
            Ask, Answer and Connect: find info you need from licensed professionals <br />
            and people who have been there before.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" size="small" sx={{ width: 200, px: 1.5, py: 1, justifyContent: 'flex-start', borderRadius:'20px', border:'2px solid black', backgroundColor:'white' }} >
              <AppleIcon sx={{ fontSize: 32, mr: 1, color:'black' }} />
              <Box textAlign="left" sx={{color:'black'}}>
                <Typography variant="caption">Download on the</Typography>
                <Typography variant="body2" fontWeight="bold">App Store</Typography>
              </Box>
            </Button>

            <Button variant="outlined" size="small" sx={{ width: 200, px: 1.5, py: 1, justifyContent: 'flex-start' , borderRadius:'20px', border:'2px solid black', backgroundColor:'white'  }}>
              <GetAppIcon sx={{ fontSize: 32, mr: 1, color:'black'  }} />
              <Box textAlign="left" sx={{color:'black'}}>
                <Typography variant="caption">Get it on</Typography>
                <Typography variant="body2" fontWeight="bold">Google Play</Typography>
              </Box>
            </Button>
          </Stack>
        </Box>
      </Grid>

   
      <Grid item xs={12} md={6}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, }}>
          <img
            src="./src/assets/header.png" alt="Health Banner" style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
