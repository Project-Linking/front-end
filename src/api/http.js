import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000,
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
