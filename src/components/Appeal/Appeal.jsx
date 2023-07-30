import { Box, Button, Container } from '@mui/material';
import { Section } from 'shared/components/Section';
import { styles } from './AppealStyles';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from 'shared/consts/routes';

export const Appeal = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={styles.wrap}>
        <Section title="The beginning of your career journey">
          <Button
            component={Link}
            to={LOGIN_ROUTE}
            variant="contained"
            sx={styles.btn}
          >
            Get started
          </Button>
        </Section>
      </Box>
    </Container>
  );
};
