const API_URL =
  "http://31b5-2603-8080-1f01-45c3-20f8-8854-72a-bf5a.ngrok.io/api";

export const get = (path) =>
  fetch(`${API_URL}${path}`).then((res) => res.json());
