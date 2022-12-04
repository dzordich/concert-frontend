import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './features/Routes';
import { Layout, ViewPort } from './ui/Layout';
import CityProvider from './features/cities/CityProvider';
import PlayerState from './features/player/PlayerState';
import Player, { PlayerSafeArea } from './features/player/Player';
import { navigationRef } from './utils/navigation';
import BannerPlaylistProvider from './features/playlists/BannerPlaylistProvider';
import LikedShowsState from './utils/hooks/LikedShowsState';

export default function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <SafeAreaProvider>
                <Layout>
                    <ViewPort>
                        <StatusBar style="light" />
                        <CityProvider>
                            <BannerPlaylistProvider>
                                <LikedShowsState>
                                    <PlayerState>
                                        <PlayerSafeArea>
                                            <Routes />
                                        </PlayerSafeArea>
                                        <Player />
                                    </PlayerState>
                                </LikedShowsState>
                            </BannerPlaylistProvider>
                        </CityProvider>
                    </ViewPort>
                </Layout>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
