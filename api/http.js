const API_URL =
  "http://c1ff-2603-8080-1f01-45c3-1412-407f-b574-22e6.ngrok.io/api";

export const get = (path) =>
  fetch(`${API_URL}${path}`).then((res) => res.json());
