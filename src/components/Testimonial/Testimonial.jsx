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
    <Box sx={{ textAlign: 'center', py: 6, px: 4 }}>
      <Typography variant="h2" gutterBottom>Success Stories</Typography>
      <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
        These are thousands of people whose lives have changed. We can't show their faces due to privacy protections, but we can share their voices.
      </Typography>

      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, zIndex: 2 }}>
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: 420,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
            scale = 0.85;
            translateX = `${offset * 100}%`;
            zIndex = 2;
            break;
          case -2:
          case 2:
            scale = 0.75;
            translateX = `${offset * 95}%`;
            zIndex = 1;
            break;
          default:
            scale = 0.7;
            translateX = '0%';
            zIndex = 0;
        }

        return (
          <Card
            key={currentIdx}
            sx={{
              position: 'absolute',
              width: 280,
              height: 380,
              borderRadius: 3,
              overflow: 'hidden',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              color: 'black',
              transform: `translateX(${translateX}) scale(${scale})`,
              transition: 'transform 0.5s ease, z-index 0.5s',
              zIndex,
              border: '0.5px solid #0080ff',
            }}
          >
            <CardContent
              sx={{
                opacity: '0.75',
                width: '100%',
                backgroundColor: 'rgba(103, 58, 183, 0.85)',
                borderRadius: '16px',
                m: 2,
                p: 2,
                textAlign: 'left',
                color: 'white',
                border: '0.5px solid #0080ff',
              }}
            >
              <FormatQuote sx={{ fontSize: 40, color: 'white', mb: 1, display: 'block', mx: 'auto'}} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                {item.quote}
              </Typography>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="subtitle2">{item.location}</Typography>
            </CardContent>
          </Card>
        );
      })}
        </Box>

        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, zIndex: 2 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonial;
