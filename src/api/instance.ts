import axios from "axios";
import { getAccessToken } from './getAccessToken';

const API_BASE_URL = "https://myserver.universalmindfulness.co.uk/api/"


//instance for endpoint that do not require validation 
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//instance for endpoint that require validation
export const axiosInstance2 = axios.create({
  baseURL:API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
}) 

axiosInstance2.interceptors.request.use( (config) => {
  // Fetch new access token for each request
  const accessToken = getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});