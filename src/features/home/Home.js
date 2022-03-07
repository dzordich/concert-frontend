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
  background-color: ${colors.neutral5};
`;

const Playlists = styled.ScrollView`
  padding-vertical: 16px;
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
  font-size: 18px;
  color: ${colors.neutral90};
`

const HorizontalLine = styled.View`
  height: 0;
  width: 50%;
  margin-left: auto;
  border: 0.5px solid ${colors.neutral30};
`

const PlaylistRow = styled.ScrollView`
  margin-bottom: 12px;
`

const BannerImage = styled.View`
  margin: 0 12px 12px;
  border-radius: 4px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.neutral50};
  height: 150px;
  overflow: hidden;
`

const Home = ({ navigation }) => {
  const { selectedCityLoaded, selectedCity } = useCities();

  return (
    <Container>
      {selectedCityLoaded ? (
        <>
          {/*<CitySelect />*/}
          {selectedCity && (
            <Playlists>
              <View style={{paddingBottom: 36}}>
              <BannerImage >
                <Text>Banner image</Text>
              </BannerImage>
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
              </View>
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
