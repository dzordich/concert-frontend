import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PATHS from "../contants/paths";
import Home from "./home/Home";
import Playlist from "./playlists/Playlist";
import { useCities } from "./cities/CityProvider";
import { colors } from "../ui/theme";
import ShowDetails from "./shows/ShowDetail";
import ExpandedPlayer from "./player/ExpandedPlayer";
import BannerPlaylist from "./playlists/BannerPlaylist";
import CitySelect from "./cities/CitySelect";
import {Pressable} from "react-native";
import {navigate} from "../utils/navigation";
import {H2, H3, Text} from "../ui/Text";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { selectedCity } = useCities();

  return (
    <Stack.Navigator
      initialRouteName={PATHS.HOME}
      screenOptions={{
          headerTitle: ({children}) =>
              <Pressable onPress={() => navigate(PATHS.CITIES)}><H3 style={{fontWeight: "700"}}>{children}</H3></Pressable>
          ,
        title: selectedCity
          ? `${selectedCity.name}, ${selectedCity.state}`.toUpperCase()
          : "",
        headerStyle: {
          backgroundColor: colors.neutral5,
        },
          headerShadowVisible: false,
        headerTintColor: colors.neutral98,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false,
      }}
    >
        {selectedCity ? <><Stack.Screen name={PATHS.HOME} component={Home}/>
            <Stack.Screen name={PATHS.CITIES} component={CitySelect} options={{title: "LOCATION"}} />
            <Stack.Screen name={PATHS.PLAYLIST} component={Playlist} />
            <Stack.Screen name={PATHS.BANNER_PLAYLIST} component={BannerPlaylist} />
            <Stack.Screen
            name={PATHS.SHOW_DETAILS}
            component={ShowDetails}
            options={{headerShown: false}}
            />
            <Stack.Group
            screenOptions={{presentation: "modal", headerShown: false}}
            >
            <Stack.Screen name={PATHS.PLAYER_EXPANDED} component={ExpandedPlayer} />
            </Stack.Group></> : <Stack.Screen name={PATHS.INITIAL_CITY_SELECT} component={CitySelect} options={{title: "LOCATION"}} />}

    </Stack.Navigator>
  );
};

export default Routes;
