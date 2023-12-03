import axios from 'axios';

const BaseURL = {
  clientDevs: 'http://localhost:5050/api/v1',
  production: 'api/v1',
};
const urlpath: 'clientDevs' | 'production' = import.meta.env.VITE_NODE_ENV;
console.log('環境変数: VITE_NODE_ENV = ', import.meta.env.VITE_NODE_ENV);
console.log('叩くAPIのエンドポイント ：', BaseURL[urlpath]);

const axiosClient = axios.create({
  baseURL: BaseURL[urlpath],
});

export default axiosClient;
