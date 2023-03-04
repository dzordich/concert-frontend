import { get } from './http';

export const listShows = ({ city: { id }, startDate, endDate, limit }) =>
    get(
        `/shows?city=${id}&start_date=${startDate}&end_date=${endDate}${
            limit ? `&limit=${limit}` : ''
        }`
    );

export const listLikedShows = showIds =>
    get(`/likedShows?${showIds.map(showId => `show_ids=${showId}`).join('&')}`);

export const getShow = showId => get(`/shows/${showId}`);
