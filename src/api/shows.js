import { get } from './http';
import { isEmpty } from 'ramda';

export const listShows = ({ city: { id }, startDate, endDate, limit }) =>
    get(
        `/shows?city=${id}&start_date=${startDate}&end_date=${endDate}${
            limit ? `&limit=${limit}` : ''
        }`
    );

export const listLikedShows = showIds =>
    get(`/shows?${showIds.map(showId => `show_ids=${showId}`).join('&')}`);
