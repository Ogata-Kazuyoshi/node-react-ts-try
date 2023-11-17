import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5050/api/v1',
});

export default axiosClient;
