import { Box, Button, Container, Typography } from '@mui/material';
import { Section } from 'shared/components/Section';
import ai from 'shared/images/ai.png';

export const Hero = () => {
  return (
    <Section>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            paddingTop: '10vh',
            paddingBottom: '20vh',
            minHeight: '90vh',
          }}
        >
          <Box
            sx={{
              flexBasis: '500px',
              paddingTop: '10vh',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              Unlock Your Full Potential and Thrive in Your Career Journey
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ fontSize: '16px', marginBottom: '40px' }}
            >
              Welcome to Career Assistant, your personal companion on the path
              to success. Discover your true potential, improve your skills, and
              build valuable global connections with our innovative platform.
              Let Career Assistant be your guiding light as you embark on a
              fulfilling and prosperous career journey.
            </Typography>
            <Button variant="contained" sx={{ padding: '8px 50px' }}>
              Get started
            </Button>
          </Box>
          <Box sx={{ flexBasis: '800px' }}>
            <img src={ai} alt="ai-robot" height="500" />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
