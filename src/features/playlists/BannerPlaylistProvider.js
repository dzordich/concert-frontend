import React, { useState, useEffect, useContext } from 'react';
import { listBannerPlaylists } from '../../api/playlists';
import { useCities } from '../cities/CityProvider';

const BannerPlaylistContext = React.createContext(null);

export const useBannerPlaylists = () => useContext(BannerPlaylistContext);

const BannerPlaylistProvider = ({ children }) => {
    const [state, setState] = useState({ banners: null, bannersLoaded: false });
    const { selectedCity } = useCities();

    useEffect(() => {
        if (selectedCity) {
            listBannerPlaylists(selectedCity).then(banners =>
                setState({ banners, bannersLoaded: true })
            );
        }
    }, [selectedCity]);

    return (
        <BannerPlaylistContext.Provider value={state}>
            {children}
        </BannerPlaylistContext.Provider>
    );
};

export default BannerPlaylistProvider;
