import { Box, Typography } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';
import { styles } from './LogoStyles';
import { HOME_ROUTE } from 'shared/consts/routes';

export const Logo = () => (
  <Box component={Link} to={HOME_ROUTE} sx={styles.wrap}>
    <SmartToyIcon fontSize="large" />
    <Typography component="span" variant="h6">
      Career Assistant
    </Typography>
  </Box>
);
