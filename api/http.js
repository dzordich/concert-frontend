const API_URL =
  "http://c22f-2600-1700-f90-3260-7963-a9bb-1918-bd5.ngrok.io/api";

export const get = (path) =>
  fetch(`${API_URL}${path}`).then((res) => res.json());
