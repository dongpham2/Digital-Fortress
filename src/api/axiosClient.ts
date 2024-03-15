import axios from "axios";

const http = axios.create({
  baseURL: "https://frontend-exam.digitalfortress.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
