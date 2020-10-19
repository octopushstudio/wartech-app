import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.43.22:54800/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// singleton instance
export default api;
