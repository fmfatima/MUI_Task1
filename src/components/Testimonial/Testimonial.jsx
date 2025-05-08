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
    name: 'john',
    location: 'Brooklyn, NY',
    quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.',
    image: '/src/assets/card.jpg'
  },
  {
    name: 'Priya ',
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

      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            display: 'flex', overflow: 'hidden', gap: 3, maxWidth: '1000px',  px: 2,
          }}
        >
          {testimonials.slice(index, index + 3).map((item, idx) => (
            <Card
              key={idx}
              sx={{
                position: 'relative',  width: 300,
                height: 400, borderRadius: 3,
                overflow: 'hidden', backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                flexShrink: 0, display: 'flex',
                alignItems: 'flex-end', color: 'white'
              }}
            >
              <CardContent
                sx={{
                  width: '100%',
                  backgroundColor: 'rgba(103, 58, 183, 0.85)', // Purple with opacity
                  borderRadius: '16px', m: 2,  p: 2,
                  textAlign: 'left', color: 'white',
                }}
              >
                <FormatQuote sx={{ fontSize: 40, color: 'white', mb: 1 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {item.quote}
                </Typography>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle2">{item.location}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, zIndex: 1 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonial;
