import { useEffect } from 'react';
import { hideAsync } from 'expo-splash-screen';
import { useCities } from '../../features/cities/CityProvider';

const LoadingScreen = ({ children, fontsLoaded }) => {
    const { citiesLoaded } = useCities();

    useEffect(() => {
        if (fontsLoaded && citiesLoaded) {
            hideAsync();
        }
    }, [fontsLoaded, citiesLoaded]);

    if (!fontsLoaded && !citiesLoaded) {
        return null;
    }

    return <>{children}</>;
};

export default LoadingScreen;
