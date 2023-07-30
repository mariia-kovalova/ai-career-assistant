import { Helmet } from 'react-helmet';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { LOGIN_ROUTE } from 'shared/consts/routes';
import { ChatComponent } from '../components/AiChat';

const AssistantView = () => {
  return (
    <>
      <Helmet>
        <title>Assistant</title>
      </Helmet>
      <ChatComponent></ChatComponent>
    </>
  );
};

export default withAuthRedirect(AssistantView, LOGIN_ROUTE);
