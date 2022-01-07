import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import CitySelect from "../cities/CitySelect";
import { useCities } from "../cities/CityProvider";
import { playlistDateRanges } from "../../contants/playlistDateRanges";
import PlaylistLink from "./PlaylistLink";
import { colors } from "../../ui/theme";
import ActivityIndicator from "../../ui/ActivityIndicator";

const Container = styled(View)`
  height: 100%;
  background-color: ${colors.neutral10};
  padding: 8px;
`;

const Playlists = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 8px;
  z-index: -1;
`;

const Home = ({ navigation }) => {
  const { selectedCityLoaded, selectedCity } = useCities();

  return (
    <Container>
      {selectedCityLoaded ? (
        <>
          <CitySelect />
          {selectedCity && (
            <Playlists>
              {playlistDateRanges.map((playlist, idx) => (
                <PlaylistLink
                  key={idx}
                  playlist={playlist}
                  navigation={navigation}
                />
              ))}
            </Playlists>
          )}
        </>
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
};

export default Home;
