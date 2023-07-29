import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Section } from 'shared/components/Section';
import { featuresData } from './featuresData';

export const Features = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        {featuresData.map(({ title, content, ariaControls, id }) => (
          <div key={id}>
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
          </div>
        ))}
      </Container>
    </Section>
  );
};
