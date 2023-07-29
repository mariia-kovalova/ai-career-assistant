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
            paddingTop: '20vh',
            paddingBottom: '20vh',
            minHeight: '90vh',
          }}
        >
          <Box
            sx={{
              flexGrow: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{
                maxWidth: '280px',
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              Платформа для покращення Ваших скілів та допомоги при першій
              співбесіді
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ maxWidth: '400px', textAlign: 'center', fontSize: '16px' }}
            >
              Ласкаво просимо до Вашої платформи за допомогою якої Ви зможете
              підготувати себе до першої роботи в IT і досягнути успіху не
              залежно від того де ви знаходитесь
            </Typography>
            <Button variant="contained">Розпочнімо</Button>
          </Box>
          <Box sx={{ flexGrow: '1' }}>
            <Box
              sx={{ maxWidth: '320px', paddingTop: '100px', margin: '0 auto' }}
            >
              <img src={ai} alt="ai-robot" width="320" />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
