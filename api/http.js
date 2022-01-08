const API_URL = `${process.env.API_URL}/api`;

export const get = (path) =>
  fetch(`${API_URL}${path}`).then((res) => res.json());
