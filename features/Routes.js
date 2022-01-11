import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PATHS from "../contants/paths";
import Home from "./home/Home";
import Playlist from "./playlists/Playlist";
import { useCities } from "./cities/CityProvider";
import { colors } from "../ui/theme";
import ShowDetails from "./shows/ShowDetail";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { selectedCity } = useCities();

  return (
    <Stack.Navigator
      initialRouteName={PATHS.HOME}
      screenOptions={{
        title: selectedCity
          ? `${selectedCity.name}, ${selectedCity.state}`.toUpperCase()
          : "",
        headerStyle: {
          backgroundColor: colors.neutral5,
        },
        headerTintColor: colors.neutral98,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name={PATHS.HOME} component={Home} />
      <Stack.Screen name={PATHS.PLAYLIST} component={Playlist} />
      <Stack.Screen name={PATHS.SHOW_DETAILS} component={ShowDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
