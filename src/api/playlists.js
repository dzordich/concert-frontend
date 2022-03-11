import { get } from "./http";

export const listBannerPlaylists = () => get("/bannerPlaylists");

export const getBannerPlaylist = (id) => get(`/bannerPlaylists/${id}`);
