import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

export default instanceAxios;
