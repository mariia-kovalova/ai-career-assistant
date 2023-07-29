import { Box, Button, Container, Typography } from '@mui/material';
import ai from 'shared/images/ai.png';

export const Hero = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            paddingTop: '10vh',
            paddingBottom: '20vh',
            minHeight: '90vh',
          }}
        >
          <Box
            sx={{
              flexBasis: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              paddingTop: '14vh',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: '600',
              }}
            >
              Платформа для покращення Ваших скілів та допомоги при першій
              співбесіді
            </Typography>
            <Typography variant="h6" component="p" sx={{ fontSize: '16px' }}>
              Ласкаво просимо до Вашої платформи за допомогою якої Ви зможете
              підготувати себе до першої роботи в IT і досягнути успіху не
              залежно від того де ви знаходитесь
            </Typography>
            <Button variant="contained">Розпочнімо</Button>
          </Box>
          <Box sx={{ flexGrow: '1' }}>
            <Box sx={{ maxWidth: '320px', paddingTop: '100px' }}>
              <img src={ai} alt="ai-robot" />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
