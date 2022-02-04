import { get } from "./http";

export const listCities = () => get("/cities");
