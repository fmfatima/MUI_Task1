import { Typography, Button, Grid, Box, Container } from '@mui/material';

const AboutUs = () => {
return (
    <>
    <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ py: 6, px: 4 }}>

        <Grid item size={12}>
            <Typography variant="h2" align="center">About Us</Typography>
        </Grid> 

        {/* Section 1 */}
        <Grid item  size={6} xs={12} md={6}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h4" color="primary" gutterBottom>
                Take the therapy QUIZ
                </Typography>
                <Typography variant="body1">
                We offer specialized therapy tailored to you. Along with master
                clinicians and tech gurus around the country, we’ve built a
                powerful and fun therapy quiz so you can discover your perfect
                therapy match. It takes about 4 minutes to complete — and you get
                a free therapy session at the end!
                </Typography>
                <Button variant="contained">Quiz Time!</Button>
            </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, md: 4 } }}>
                <img
                src="./src/assets/about1.png"
                alt="About Us"
                style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
                />
            </Box>
        </Grid>

        {/* Section 2 - Image Left, Text Right */}
        <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: { xs: 2, md: 4 } }}>
                <img
                src="./src/assets/about.png"
                alt="About Us"
                style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
                />
            </Box>
        </Grid>

        <Grid item size={6} xs={12} md={6}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                p: { xs: 2, md: 4 },
                textAlign: 'end',
                }}
            >
                <Typography variant="h4" color="primary" gutterBottom>
                Let's talk about it
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                Do you ever find yourself endlessly looking online for answers to your health questions and you can't get a clear understanding, let alone find someone who you feel comfortable with? We have built a space where you can learn about anything and meet people who understand you. This is your space to start and continue your health journey.
                </Typography>
                <Button variant="contained" size="small" sx={{ width: 150, px: 1.5, py: 1, textAlign: 'end' }}>
                Get The App
                </Button>
            </Box>
        </Grid>
    </Grid>
    </>
    );
};

export default AboutUs;
