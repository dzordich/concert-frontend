import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./features/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { Layout, ViewPort } from "./ui/Layout";
import CityProvider from "./features/cities/CityProvider";
import {colors} from "./ui/theme";

export default function App() {
  return (
    <NavigationContainer>
      <Layout>
        <ViewPort>
          <StatusBar style="light"/>
          <CityProvider>
          <Routes />
          </CityProvider>
        </ViewPort>
      </Layout>
    </NavigationContainer>
  );
}
