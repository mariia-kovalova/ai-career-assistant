import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  List,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Section } from 'shared/components/Section';
import { featuresData } from './featuresData';
import { styles } from './FeaturesStyles';

export const Features = () => {
  return (
    <Section title="Services">
      <Container maxWidth="lg" sx={styles.wrap}>
        <List sx={styles.list}>
          {featuresData.map(({ title, content, ariaControls, id }) => (
            <li key={id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={ariaControls}
                  id={id}
                >
                  <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{content}</Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          ))}
        </List>
      </Container>
    </Section>
  );
};
