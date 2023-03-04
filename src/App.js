import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Routes from './features/Routes';
import { Layout, ViewPort } from './ui/Layout';
import CityProvider from './features/cities/CityProvider';
import PlayerState from './features/player/PlayerState';
import Player, { PlayerSafeArea } from './features/player/Player';
import { navigationRef } from './utils/navigation';
import BannerPlaylistProvider from './features/playlists/BannerPlaylistProvider';
import LikedShowsState from './utils/hooks/LikedShowsState';
import LoadingScreen from './ui/layout/LoadingScreen';

preventAutoHideAsync();

export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    });

    return (
        <NavigationContainer ref={navigationRef}>
            <SafeAreaProvider>
                <Layout>
                    <ViewPort>
                        <StatusBar style="light" />
                        <CityProvider>
                            <BannerPlaylistProvider>
                                <LikedShowsState>
                                    <LoadingScreen fontsLoaded={fontsLoaded}>
                                        <PlayerState>
                                            <PlayerSafeArea>
                                                <Routes />
                                            </PlayerSafeArea>
                                            <Player />
                                        </PlayerState>
                                    </LoadingScreen>
                                </LikedShowsState>
                            </BannerPlaylistProvider>
                        </CityProvider>
                    </ViewPort>
                </Layout>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
