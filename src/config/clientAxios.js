import axios from "axios";



const defaultOptions = {
  baseURL: process.env.REACT_APP_API_BACK_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('token'));
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


export default clientAxios;