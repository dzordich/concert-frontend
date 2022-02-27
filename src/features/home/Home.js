import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import CitySelect from "../cities/CitySelect";
import { useCities } from "../cities/CityProvider";
import { playlists} from "../../contants/playlists";
import PlaylistLink from "./PlaylistLink";
import { colors } from "../../ui/theme";
import ActivityIndicator from "../../ui/ActivityIndicator";
import {Text} from "../../ui/Text";

const Container = styled(View)`
  height: 100%;
  background-color: ${colors.neutral10};
  padding-vertical: 12px;
`;

const Playlists = styled(View)`
  margin-top: 12px;
  z-index: -1;
`;

const ListHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
  overflow: hidden;
  
`

const ListHeaderText = styled(Text)`
  font-size: 16px;
  margin-right: 12px;
  color: ${colors.neutral80};
`

const HorizontalLine = styled.View`
  height: 0;
  width: 100%;
  border: 0.5px solid ${colors.neutral30};
`

const PlaylistRow = styled.ScrollView`
  margin-bottom: 12px;
`

const Home = ({ navigation }) => {
  const { selectedCityLoaded, selectedCity } = useCities();

  return (
    <Container>
      {selectedCityLoaded ? (
        <>
          <CitySelect />
          {selectedCity && (
            <Playlists>
              <ListHeader>
              <ListHeaderText>Upcoming Concerts</ListHeaderText>
                <HorizontalLine />
              </ListHeader>
              <PlaylistRow horizontal={true}>
              {playlists.days.map((playlist, idx) => (
                <PlaylistLink
                  key={idx}
                  playlist={playlist}
                  navigation={navigation}
                />
              ))}
              </PlaylistRow>
              <PlaylistRow horizontal={true}>
              {playlists.weeks.map((playlist, idx) => (
                <PlaylistLink
                  key={idx}
                  playlist={playlist}
                  navigation={navigation}
                />
              ))}
              </PlaylistRow>
              <PlaylistRow horizontal={true}>
              {playlists.months.map((playlist, idx) => (
                <PlaylistLink
                  key={idx}
                  playlist={playlist}
                  navigation={navigation}
                />
              ))}
              </PlaylistRow>
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
