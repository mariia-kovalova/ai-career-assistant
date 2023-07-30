import { Box, Button, Container, Typography } from '@mui/material';
import { Section } from 'shared/components/Section';
import ai from 'shared/images/ai.png';
import { styles } from './HeroStyles';
import { Img } from './Hero.styled';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from 'shared/consts/routes';

export const Hero = () => {
  return (
    <Section>
      <Container maxWidth="xl">
        <Box sx={styles.wrap}>
          <Box sx={styles.content}>
            <Typography variant="h4" component="h1" sx={styles.h1}>
              Unlock Your Full Potential and Thrive in Your Career Journey
            </Typography>
            <Typography variant="h6" component="p" sx={styles.description}>
              Welcome to Career Assistant, your personal companion on the path
              to success. Discover your true potential, improve your skills, and
              build valuable global connections with our innovative platform.
              Let Career Assistant be your guiding light as you embark on a
              fulfilling and prosperous career journey.
            </Typography>
            <Button
              component={Link}
              to={LOGIN_ROUTE}
              variant="contained"
              sx={styles.btn}
            >
              Get started
            </Button>
          </Box>
          <Box sx={styles.imgWrap}>
            <Img src={ai} alt="ai-robot" height="500" />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
