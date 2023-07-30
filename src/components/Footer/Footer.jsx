import { Box, Container, Link, Tooltip, Typography } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { styles } from './FooterStyles';
import { Logo } from 'shared/components/Logo';
import { Navigation } from 'shared/components/Navigation';
import { footerNavLinks } from 'shared/consts/navLinks';
import { StyledRouterLink } from 'shared/components/StyledRouterLink';

export const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="xl">
      <Box sx={styles.footerContentWrap}>
        <Logo />
        <Navigation
          navLinks={footerNavLinks}
          componentLink={StyledRouterLink}
        />
        <Tooltip title="developed by 'Кодові маги' ">
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
