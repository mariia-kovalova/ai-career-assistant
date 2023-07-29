import { Helmet } from 'react-helmet';
import { Hero } from 'components/Hero';
import { Features } from 'components/Featres';

const HomeView = () => (
  <>
    <Helmet>
      <title>Career Assistant App</title>
    </Helmet>
    <Hero />
    <Features />
  </>
);

export default HomeView;
