import React, { useState, useEffect, useContext } from "react";
import { listBannerPlaylists } from "../../api/playlists";

const BannerPlaylistContext = React.createContext(null);

export const useBannerPlaylists = () => useContext(BannerPlaylistContext);

const BannerPlaylistProvider = ({ children }) => {
  const [state, setState] = useState({ banners: null, bannersLoaded: false });

  useEffect(
    () =>
      listBannerPlaylists().then((banners) =>
        setState({ banners, bannersLoaded: true })
      ),
    []
  );

  return (
    <BannerPlaylistContext.Provider value={state}>
      {children}
    </BannerPlaylistContext.Provider>
  );
};

export default BannerPlaylistProvider;
