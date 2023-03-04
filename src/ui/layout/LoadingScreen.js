import { useEffect } from 'react';
import { hideAsync } from 'expo-splash-screen';
import { useCities } from '../../features/cities/CityProvider';
import { useBannerPlaylists } from '../../features/playlists/BannerPlaylistProvider';

const LoadingScreen = ({ children, fontsLoaded }) => {
    const { citiesLoaded } = useCities();
    const { bannersLoaded } = useBannerPlaylists();

    useEffect(() => {
        if (fontsLoaded && citiesLoaded && bannersLoaded) {
            hideAsync();
        }
    }, [fontsLoaded, citiesLoaded, bannersLoaded]);

    if (!fontsLoaded && !citiesLoaded && !bannersLoaded) {
        return null;
    }

    return <>{children}</>;
};

export default LoadingScreen;
