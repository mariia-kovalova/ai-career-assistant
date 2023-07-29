import { Helmet } from 'react-helmet';
import { Hero } from 'components/Hero';
import { Features } from 'components/Featres';
import { Appeal } from 'components/Appeal';

const HomeView = () => (
  <>
    <Helmet>
      <title>Career Assistant App</title>
    </Helmet>
    <Hero />
    <Features />
    <Appeal />
  </>
);

export default HomeView;
