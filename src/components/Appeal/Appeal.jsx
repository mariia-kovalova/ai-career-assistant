import { Box, Button, Container } from '@mui/material';
import { Section } from 'shared/components/Section';
import { styles } from './AppealStyles';

export const Appeal = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={styles.wrap}>
        <Section title="The beginning of your career journey">
          <Button variant="contained" sx={styles.btn}>
            Get started
          </Button>
        </Section>
      </Box>
    </Container>
  );
};
