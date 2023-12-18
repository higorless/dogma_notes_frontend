import axios from "axios";

export const api = axios.create({
  baseURL: "https://dogmanotes-api.onrender.com",
});
