import { environment } from '../environment/environment';

const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: environment.api_url+"/api",
    timeout: 1000,
  });

  export default axiosInstance;