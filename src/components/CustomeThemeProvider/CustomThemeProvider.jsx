import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blue, grey, pink } from '@mui/material/colors';
import { refreshTheme } from 'redux/theme/operations';
import { LIGHT } from 'shared/consts/theme';

const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: blue,
    secondary: blue,
    extra: {
      pink: pink,
      contactItemBGC: mode === LIGHT ? blue[50] : grey[600],
      footerBGC: mode === LIGHT ? blue[100] : grey[800],
      modalBGC: mode === LIGHT ? '#070707' : grey[900],
    },
  },
});

export const CustomThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    dispatch(refreshTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
