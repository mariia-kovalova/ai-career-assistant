import { Helmet } from 'react-helmet';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { LOGIN_ROUTE } from 'shared/consts/routes';
import { Section } from 'shared/components/Section';

const AssistantView = () => {
  return (
    <>
      <Helmet>
        <title>Assistant</title>
      </Helmet>
      <Section>
        <p>Assistant Page</p>
      </Section>
    </>
  );
};

export default withAuthRedirect(AssistantView, LOGIN_ROUTE);
