import axios from "axios";

const API_BASE_URL = "https://myserver.universalmindfulness.co.uk/api/"

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});