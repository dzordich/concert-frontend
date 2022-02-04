import axios from "axios";

const API_URL = `${process.env.API_URL}/api`;

export const get = (path) =>
  axios.get(`${API_URL}${path}`).then((res) => res.data);
