import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PATHS from '../contants/paths';
import Home from './home/Home';
import Playlist from './playlists/Playlist';
import { useCities } from './cities/CityProvider';
import { colors } from '../ui/theme';
import ShowDetails from './shows/ShowDetail';
import BannerPlaylist from './playlists/BannerPlaylist';
import CitySelect from './cities/CitySelect';
import LikedShows from './likedShows/LikedShows';
import SpotifyLogo from '../ui/icons/SpotifyLogo';
import useLinkHandler from '../utils/hooks/useLinkHandler';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const { selectedCity } = useCities();

    useLinkHandler();

    return (
        <Stack.Navigator
            initialRouteName={PATHS.HOME}
            screenOptions={{
                title: '',
                headerStyle: {
                    backgroundColor: colors.neutral5,
                },
                headerShadowVisible: false,
                headerTintColor: colors.neutral98,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
            }}
        >
            {selectedCity ? (
                <>
                    <Stack.Screen
                        name={PATHS.HOME}
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name={PATHS.CITIES}
                        component={CitySelect}
                        options={{ title: 'LOCATION' }}
                    />
                    <Stack.Screen
                        name={PATHS.PLAYLIST}
                        component={Playlist}
                        options={{ headerRight: () => <SpotifyLogo /> }}
                    />
                    <Stack.Screen
                        name={PATHS.LIKED_SHOWS}
                        component={LikedShows}
                        options={{ headerRight: () => <SpotifyLogo /> }}
                    />
                    <Stack.Screen
                        name={PATHS.BANNER_PLAYLIST}
                        component={BannerPlaylist}
                        options={{ headerRight: () => <SpotifyLogo /> }}
                    />
                    <Stack.Group
                        screenOptions={{
                            presentation: 'modal',
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen
                            name={PATHS.SHOW_DETAILS}
                            component={ShowDetails}
                            options={{ headerShown: false }}
                        />
                    </Stack.Group>
                </>
            ) : (
                <Stack.Screen
                    name={PATHS.INITIAL_CITY_SELECT}
                    component={CitySelect}
                />
            )}
        </Stack.Navigator>
    );
};

export default Routes;
