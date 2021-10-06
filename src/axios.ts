import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:8001/api/v1',
});

instanceAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  const nextConfig = { ...config };
  nextConfig.headers.Authorization = token || '';

  return nextConfig;
});

export default instanceAxios;
