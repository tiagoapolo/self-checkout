import axios from "axios";
import config from '../config.json';

const baseUrl = process.env.REACT_APP_SERVER_URL || config.baseUrl;

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
