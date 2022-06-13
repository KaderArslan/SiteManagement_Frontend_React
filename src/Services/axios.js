import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:54620/",
});

export default api;