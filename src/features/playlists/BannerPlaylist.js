import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import { View, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { compose, prop } from "ramda";
import { colors } from "../../ui/theme";
import {H2, Text} from "../../ui/Text";
import { usePlayer } from "../player/PlayerState";
import Track from "./Track";
import { getBannerPlaylist } from "../../api/playlists";
import ScrollBounceBackground from "../../ui/layout/ScrollBounceBackground";
import {parseAndFormatShortDate} from "../../utils/dates";

const PlaylistContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  background-color: ${colors.neutral5};
`;

const PlaylistHeader = styled(LinearGradient)`
  border-bottom-color: ${colors.primary80};
  border-bottom-width: 1px;
  padding: 16px;
  margin-bottom: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const PlaylistHeaderText = styled(H2)`
  margin-bottom: 8px;
`;

const PlaylistHeaderCard = styled(Image)`
  width: 140px;
  height: 140px;
  margin-right: 16px;
  padding: 8px;
  border-radius: 4px;
  overflow: hidden;
`;


const addPerformerToTopTrack = (performer) => ({
  ...performer,
  top_track: {
    ...performer.top_track,
    artistInfo: performer,
  },
});

const songToTrackObject = ({
                             preview_url,
                             name,
                             artistInfo,
                             album_art_url,
                             id,
                           }) => ({
  id,
  url: preview_url,
  title: name,
  artist: artistInfo.name,
  artwork: album_art_url,
  artistInfo,
});

const BannerPlaylist = ({ route, navigation }) => {
  const [performers, setPerformers] = useState([]);
  const {
    play,
    updateQueue,
    currentTrack,
    playing,
    togglePaused,
  } = usePlayer();
  const { id, title, background, start_date, end_date } = route.params;

  const onSongPress = async (song, index) => {
    if (song.preview_url) {
      await updateQueue(
        performers
          .slice(index, performers.length)
          .filter((performer) => !!performer.top_track?.preview_url)
          .map(compose(songToTrackObject, prop("top_track")))
      );
      await play();
    }
  };

  useEffect(() => {
    getBannerPlaylist(id).then((response) =>
        setPerformers(response.artists.map(addPerformerToTopTrack))
    );
  }, [id]);

  useMemo(() => navigation.setOptions({headerStyle: { backgroundColor: colors.primary40, borderWidth: 0 }}), [])

  return (
    <PlaylistContainer>
      <ScrollView>
        <ScrollBounceBackground color={colors.primary40}/>
        <PlaylistHeader colors={[colors.primary40, colors.neutral5]}>
          <PlaylistHeaderCard source={{ uri: background }} />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PlaylistHeaderText>{title}</PlaylistHeaderText>
            {start_date && end_date && <Text>{parseAndFormatShortDate(start_date)} - {parseAndFormatShortDate(end_date)}</Text>}
          </View>
        </PlaylistHeader>
        {performers &&
          performers.map(
            (performer, idx) =>
              performer.top_track && (
                <Track
                  performer={performer}
                  onPress={onSongPress}
                  trackIndex={idx}
                  currentTrack={currentTrack}
                  key={idx}
                />
              )
          )}
      </ScrollView>
    </PlaylistContainer>
  );
};

export default BannerPlaylist;