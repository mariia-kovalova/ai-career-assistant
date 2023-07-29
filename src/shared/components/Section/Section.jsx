import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './SectionStyles';

export const Section = ({ title, children }) => {
  return (
    <Box component="section" sx={styles.section}>
      {title && (
        <Typography component="h2" variant="h4" sx={styles.title}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
