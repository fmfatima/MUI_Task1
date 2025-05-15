import { Typography, Button, Grid, Box, Container } from '@mui/material';

const AboutUs = () => {
return (
    <>
    <Grid item xs={12}>
            <Typography 
              variant="h2" 
              align="center"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 700,
                // mb: { xs: 4, sm: 5, md: 6 },
                color: 'black'
              }}
            >
              About Us
            </Typography>
    </Grid>
    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ py: 1, px: 4, maxWidth: '100%', mx: 'auto' }}>

        {/* Section 2: First Row - Quiz and Image */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
                width: 'auto',
                maxWidth: { xs: '100%', md: '600px' },
                height:'100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                  Take the therapy QUIZ
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  We offer specialized therapy tailored to you. Along with master
                  clinicians and tech gurus around the country, we've built a powerful and
                  fun therapy quiz so you can discover your perfect therapy match. It
                  takes about 4 minutes to complete — and you get a free therapy session
                  at the end!
                </Typography>
                <Button 
                  variant="contained"
                  sx={{
                    width: { xs: '100%', sm: '223px' },
                    height: '50px',
                    borderRadius: '15px',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 500,
                    mt: 'auto'
                  }}
                >
                  Quiz Time!
                </Button>
            </Box>
        </Grid>

        {/* RIGHT: Image Section */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/about1.png"
                  alt="Quiz Section"
                  sx={{
                    width: '100%',
                    // height: 'auto',
                    borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        {/* Section 3: Second Row - Image and Text */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/about.png"
                  alt="Let's Talk Section"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <Box
              sx={{

                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
                width: 'auto',
                maxWidth: { xs: '100%', md: '600px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                  Let's talk about it
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  Do you ever find yourself endlessly looking online for answers to your health questions? We have built a space where you can learn about anything and meet people who understand you. This is your space to start and continue your health journey.
                </Typography>
                <Button 
                  variant="contained"
                  sx={{
                    width: { xs: '100%', sm: '223px' },
                    height: '50px',
                    borderRadius: '15px',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 500,
                    mt: 'auto'
                  }}
                >
                  Get The App
                </Button>
            </Box>
        </Grid>
    </Grid>
    </>
    );
};

export default AboutUs;
