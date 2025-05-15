import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from '@mui/icons-material';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Jack K.',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Izabella',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Alice',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Tina L.',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'John',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Priya',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Wizard',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        py: { xs: 4, sm: 5, md: 6 }, 
        px: { xs: 2, sm: 3, md: 4 },
        maxWidth: '1440px',
        mx: 'auto'
      }}
    >
      <Typography 
        variant="h2" 
        sx={{
          fontSize: {
            xs: '2.25rem',  
            sm: '3rem',    
            md: '3.75rem' },
          fontWeight: 300,
          mb: { xs: 2, sm: 3 }
        }}
      >
        Success Stories
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          maxWidth: '1015px', 
          mx: 'auto', 
          mb: { xs: 3, sm: 4 },
          fontSize: {
            xs: '0.875rem',  
            sm: '1rem',      
            md: '1.25rem'    
          },
          fontStyle: 'italic'
        }}
      >
        These are thousands of people whose lives have changed. We can't show their faces due to privacy protections, but we can share their voices.
      </Typography>

      <Box 
        sx={{ 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1, sm: 2 },
          my: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <IconButton 
          onClick={handlePrev} 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            width: { xs: 36, sm: 40, md: 48 },
            height: { xs: 36, sm: 40, md: 48 },
            position: 'absolute',
            left: { xs: '5%', sm: '8%', md: '10%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10
          }}
        >
          <ArrowBackIos sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
        </IconButton>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px', md: '1000px' },
            height: { xs: 300, sm: 350, md: 420 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {[...Array(5)].map((_, i) => {
            const offset = i - 2;
            const currentIdx = (index + offset + testimonials.length) % testimonials.length;
            const item = testimonials[currentIdx];

            let scale, translateX, zIndex;

            switch (offset) {
              case 0:
                scale = 1;
                translateX = '0%';
                zIndex = 3;
                break;
              case -1:
              case 1:
                scale = { xs: 0.8, sm: 0.85 };
                translateX = { xs: `${offset * 85}%`, sm: `${offset * 100}%` };
                zIndex = 2;
                break;
              case -2:
              case 2:
                scale = { xs: 0.65, sm: 0.7, md: 0.75 };
                translateX = { xs: `${offset * 80}%`, sm: `${offset * 90}%`, md: `${offset * 95}%` };
                zIndex = 1;
                break;
              default:
                scale = 0.6;
                translateX = '0%';
                zIndex = 0;
            }

            return (
              <Card
                key={currentIdx}
                sx={{
                  position: 'absolute',
                  width: { xs: 200, sm: 260, md: 280 },
                  height: { xs: 260, sm: 320, md: 380 },
                  borderRadius: { xs: 2, sm: 3 },
                  overflow: 'hidden',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'flex-end',
                  transform: `translateX(${typeof translateX === 'object' ? translateX.xs : translateX}) scale(${typeof scale === 'object' ? scale.xs : scale})`,
                  transition: 'all 0.5s ease',
                  zIndex,
                  border: '1px solid #0080ff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  '@media (min-width: 600px)': {
                    transform: `translateX(${typeof translateX === 'object' ? translateX.sm : translateX}) scale(${typeof scale === 'object' ? scale.sm : scale})`
                  },
                  '@media (min-width: 900px)': {
                    transform: `translateX(${typeof translateX === 'object' ? translateX.md : translateX}) scale(${typeof scale === 'object' ? scale.md : scale})`
                  }
                }}
              >
                <CardContent
                  sx={{
                    
                    width: '100%',
                    backgroundColor: 'rgba(103, 58, 183, 0.9)',
                    borderRadius: { xs: '12px', sm: '16px' },
                    m: { xs: 1, sm: 1.5, md: 2 },
                    p: { xs: 1.5, sm: 2 },
                    textAlign: 'left',
                    color: 'white'
                  }}
                >
                  <FormatQuote 
                    sx={{ 
                      fontSize: {
                        xs: '0.6rem',   
                        sm: '0.8rem',   
                        md: '1rem'      
                      },
                      color: 'white',
                      mb: 1,
                      display: 'block',
                      mx: 'auto'
                    }}
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      lineHeight: 1.4
                    }}
                  >
                    {item.quote}
                  </Typography>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                      fontWeight: 600,
                      mb: 0.5
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      opacity: 0.9
                    }}
                  >
                    {item.location}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <IconButton 
          onClick={handleNext} 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            width: { xs: 36, sm: 40, md: 48 },
            height: { xs: 36, sm: 40, md: 48 },
            position: 'absolute',
            right: { xs: '5%', sm: '8%', md: '10%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10
          }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonial;
