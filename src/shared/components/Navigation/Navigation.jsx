import { useAuth } from 'hooks';

import { Box, ListItemButton } from '@mui/material';
import { styles } from './NavigationStyles';

export const Navigation = ({ navLinks, componentLink }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Box component="nav" sx={styles.nav}>
      <Box component="ul" sx={styles.list}>
        {navLinks(isLoggedIn).map(({ path, page, render }) =>
          render ? (
            <Box component="li" key={page}>
              <ListItemButton component={componentLink} to={path}>
                {page}
              </ListItemButton>
            </Box>
          ) : (
            ''
          )
        )}
      </Box>
    </Box>
  );
};
