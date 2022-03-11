import axios from "axios";

const defaultApiUrl =
  "https://3xk9q86d4e.execute-api.us-east-1.amazonaws.com/dev";

const API_URL = `${process.env.API_URL || defaultApiUrl}/api`;

console.log(API_URL);
export const get = (path) =>
  axios.get(`${API_URL}${path}`).then((res) => res.data);
