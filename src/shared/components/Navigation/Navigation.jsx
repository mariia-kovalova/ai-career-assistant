import { useAuth } from 'hooks';

import { Box, ListItemButton } from '@mui/material';
import { StyledNavLink } from './Navigation.styled';
import { styles } from './NavigationStyles';

export const Navigation = ({ navLinks }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Box component="nav" sx={styles.nav}>
      <Box component="ul" sx={styles.list}>
        {navLinks(isLoggedIn).map(({ path, page, render, accent }) =>
          render ? (
            <Box component="li" key={page}>
              <ListItemButton component={StyledNavLink} to={path}>
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
