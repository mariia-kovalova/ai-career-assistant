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
      page: 'Асистент',
      render: true,
    },
    {
      path: SERVICES_ROUTE,
      page: 'Сервіси',
      render: true,
    },
    {
      path: ABOUT_ROUTE,
      page: 'Про нас',
      render: true,
    },
    {
      path: REGISTER_ROUTE,
      page: 'Зареєструватися',
      render: !isLoggedIn,
    },
    {
      path: LOGIN_ROUTE,
      page: 'Увійти',
      render: !isLoggedIn,
    },
  ];
};

export const footerNavLinks = isLoggedIn => {
  return [
    {
      path: ASSISTANT_ROUTE,
      page: 'Асистент',
      render: true,
    },
    {
      path: SERVICES_ROUTE,
      page: 'Сервіси',
      render: true,
    },
    {
      path: ABOUT_ROUTE,
      page: 'Про нас',
      render: true,
    },
  ];
};
