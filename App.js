import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./features/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { Layout, ViewPort } from "./ui/Layout";
import CityProvider from "./features/cities/CityProvider";
import { colors } from "./ui/theme";
import PlayerState from "./features/player/PlayerState";
import Player from "./features/player/Player";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {navigationRef} from "./utils/navigation";

export default function App() {
  return (
      <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Layout>
          <ViewPort>
            <StatusBar style="light" />
            <CityProvider>
              <PlayerState>
                <Routes />
                <Player />
              </PlayerState>
            </CityProvider>
          </ViewPort>
        </Layout>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
