import axios from "axios";

const IP_ADDRESS_API = process.env.PORT || "localhost";
const PORT_API = process.env.PORT_API || 300;

const api = axios.create({
  baseURL: `http://${IP_ADDRESS_API}:${PORT_API}/api`,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
