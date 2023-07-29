import {
  ABOUT_ROUTE,
  ASSISTANT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SERVICES_ROUTE,
} from 'shared/consts/routes';

export const headerNavLinks = isLoggedIn => {
  return [
    {
      path: ASSISTANT_ROUTE,
      page: 'Assistant',
      render: true,
    },
    {
      path: SERVICES_ROUTE,
      page: 'Services',
      render: true,
    },
    {
      path: ABOUT_ROUTE,
      page: 'About us',
      render: true,
    },
    {
      path: REGISTER_ROUTE,
      page: 'Register',
      render: !isLoggedIn,
    },
    {
      path: LOGIN_ROUTE,
      page: 'Log in',
      render: !isLoggedIn,
    },
  ];
};

export const footerNavLinks = isLoggedIn => {
  return [
    {
      path: ASSISTANT_ROUTE,
      page: 'Assistant',
      render: true,
    },
    {
      path: SERVICES_ROUTE,
      page: 'Services',
      render: true,
    },
    {
      path: ABOUT_ROUTE,
      page: 'About us',
      render: true,
    },
  ];
};
