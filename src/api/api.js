import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
