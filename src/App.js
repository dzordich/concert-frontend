import React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./features/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { Layout, ViewPort } from "./ui/Layout";
import CityProvider from "./features/cities/CityProvider";
import PlayerState from "./features/player/PlayerState";
import Player, { PlayerSafeArea } from "./features/player/Player";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./utils/navigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Layout>
          <ViewPort>
            <StatusBar style="light" />
            <CityProvider>
              <PlayerState>
                <PlayerSafeArea>
                  <Routes />
                </PlayerSafeArea>
                <Player />
              </PlayerState>
            </CityProvider>
          </ViewPort>
        </Layout>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
