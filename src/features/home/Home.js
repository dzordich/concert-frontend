import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { playlists } from "../../contants/playlists";
import PlaylistLink from "./PlaylistLink";
import { colors } from "../../ui/theme";
import { Text } from "../../ui/Text";
import BannerPlaylists from "./BannerPlaylists";
import { useBannerPlaylists } from "../playlists/BannerPlaylistProvider";

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
  margin: 24px 12px;
  overflow: hidden;
`;

const ListHeaderText = styled(Text)`
  font-size: 18px;
  color: ${colors.neutral90};
`;

const HorizontalLine = styled.View`
  height: 0;
  width: 50%;
  margin-left: auto;
  border: 0.5px solid ${colors.neutral30};
`;

const PlaylistRow = styled.ScrollView`
  margin-bottom: 12px;
`;

const Home = ({ navigation }) => {
  const { bannersLoaded } = useBannerPlaylists();
  return (
    <Container>
      {bannersLoaded ? (
        <Playlists>
          <View style={{ paddingBottom: 36 }}>
            <BannerPlaylists />
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
      ) : null}
    </Container>
  );
};

export default Home;
