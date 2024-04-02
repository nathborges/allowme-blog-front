import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_HOST;
const apiKey = import.meta.env.VITE_API_KEY;

export default axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    }
  });