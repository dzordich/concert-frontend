import { get } from "./http";
import { tap } from "ramda";

export const listShows = ({ city: { id }, startDate, endDate }) =>
  get(`/shows?city=${id}&start_date=${startDate}&end_date=${endDate}`);
