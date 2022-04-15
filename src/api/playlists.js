import { get } from "./http";

export const listBannerPlaylists = (city) => get(`/bannerPlaylists?city=${city.id}`);

export const getBannerPlaylist = (id) => get(`/bannerPlaylists/${id}`);
