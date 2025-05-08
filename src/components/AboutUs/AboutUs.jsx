import { Typography, Button, Grid, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <>
      {/* Section 1 */}
      <Grid container alignItems="center"
        justifyContent="center" spacing={4} sx={{ py: 6, px: 4 
    }} >
        <Grid item xs={12}>
            <Typography variant='h2' align="center">About Us</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column',
              justifyContent: 'center', height: '100%', p: { xs: 2, md: 4 }, textAlign: 'start',
            }}
          >
            <Typography variant="h2" color="primary" gutterBottom>
              Take the therapy QUIZ
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              We offer specialized therapy tailored to you. Along with master
              clinicians and tech gurus around the country, we’ve built a
              powerful and fun therapy quiz so you can discover your perfect
              therapy match. It takes about 4 minutes to complete — and you get
              a free therapy session at the end!
            </Typography>

            <Button variant="contained" size="small" sx={{ width: 150, px: 1.5, py: 1 }} >
              Quiz Time!
            </Button>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 },
            }} >
            <img
              src= './src/assets/about1.png' alt="Therapy Quiz"
              style={{ width: '100%', maxWidth: '450px', borderRadius: '12px',
              }}
            />
          </Box>
        </Grid>

      {/* Section 2 */}
            
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 },}} >
            <img
                src='./src/assets/about.png' alt="About Us" style={{ width: '100%', maxWidth: '450px', borderRadius: '12px',
            }} />
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
                height: '100%', p: { xs: 2, md: 4 }, textAlign: 'start',
            }} >

        <Typography variant="h2" color="primary" gutterBottom>
            Let's talk about it
        </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Do you ever find yourself endlessly looking online for answers 
              to your health questions and you can't get a clear understanding. 
              let alone find someone who you feel comfortable with. We have
                build a space where yoy can learn about anything
                and meet people who understand you. this is 
                yoour space to start and continue your health journey .
            </Typography>

            <Button variant="contained" size="small" sx={{ width: 150, px: 1.5, py: 1 }} >
              Get The App
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
