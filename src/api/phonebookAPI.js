import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const UserAPI = {
  register: async credentials => {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  },
  login: async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  },
  logout: async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  },
  refresh: async persistedToken => {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  },
};
