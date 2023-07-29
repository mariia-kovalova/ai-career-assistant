import { Box, Container, Link, Tooltip, Typography } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { styles } from './FooterStyles';
import { Logo } from 'shared/components/Logo';
import { Navigation } from 'components/Navigation';
import { footerNavLinks } from 'shared/consts/navLinks';

export const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container>
      <Box sx={styles.footerContentWrap}>
        <Logo />
        <Navigation navLinks={footerNavLinks} />
        <Tooltip title="розроблено командою 'Кодові маги' ">
          <Link
            href="https://github.com/mariia-kovalova/ai-career-assistant"
            target="_blank"
            rel="noreferrer noopener nofollow"
            color="inherit"
            sx={styles.link}
          >
            <IntegrationInstructionsIcon />
            <Typography sx={styles.contacts}>Кодові Маги</Typography>
          </Link>
        </Tooltip>
      </Box>
    </Container>
  </Box>
);
