import { Helmet } from 'react-helmet';
import { Section } from 'shared/components/Section';
import { Hero } from 'components/Hero';

const HomeView = () => (
  <>
    <Helmet>
      <title>Career Assistant App</title>
    </Helmet>
    <Section>
      <Hero />
    </Section>
  </>
);

export default HomeView;
