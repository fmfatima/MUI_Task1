import { Typography, Button, Stack, Grid, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GetAppIcon from '@mui/icons-material/GetApp';

const Header = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ py: 6, px: 4 }}>
      
      {/* Left Grid: Text & Buttons */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
          height: '100%', p: { xs: 2, md: 4 }, textAlign: 'center', }} >
            
          <Typography variant="h2" color="primary" gutterBottom>
            Share the <span style={{ color: 'purple' }}>Health</span>
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Ask, Answer and Connect: find info you need from licensed professionals <br />
            and people who have been there before.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" size="small" sx={{ width: 200, px: 1.5, py: 1, justifyContent: 'flex-start' }} >
              <AppleIcon sx={{ fontSize: 32, mr: 1 }} />
              <Box textAlign="left">
                <Typography variant="caption">Download on the</Typography>
                <Typography variant="body2" fontWeight="bold">App Store</Typography>
              </Box>
            </Button>

            <Button variant="outlined" size="small" sx={{ width: 200, px: 1.5, py: 1, justifyContent: 'flex-start' }}>
              <GetAppIcon sx={{ fontSize: 32, mr: 1 }} />
              <Box textAlign="left">
                <Typography variant="caption">Download on the</Typography>
                <Typography variant="body2" fontWeight="bold">Google Play</Typography>
              </Box>
            </Button>
          </Stack>
        </Box>
      </Grid>

      {/* Right Grid: Image */}
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
