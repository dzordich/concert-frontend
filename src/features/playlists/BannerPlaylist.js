import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { compose, prop } from "ramda";
import { colors } from "../../ui/theme";
import { H2, Text } from "../../ui/Text";
import { usePlayer } from "../player/PlayerState";
import Track from "./Track";
import PlayPauseButton, {CirclePlayButton} from "../player/PlayPauseButton";
import { getBannerPlaylist } from "../../api/playlists";

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
    artistName: performer.name,
  },
});

const songToTrackObject = ({
  preview_url,
  name,
  artistName,
  album_art_url,
  id,
}) => ({
  id,
  url: preview_url,
  title: name,
  artist: artistName,
  artwork: album_art_url,
});

const BannerPlaylist = ({ route }) => {
  const [performers, setPerformers] = useState([]);
  const {
    play,
    updateQueue,
    currentTrack,
    playing,
    togglePaused,
  } = usePlayer();
  const { id, title, background } = route.params;

  useEffect(() => {
    getBannerPlaylist(id).then((response) =>
      setPerformers(response.artists.map(addPerformerToTopTrack))
    );
  }, [id]);

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

  return (
    <PlaylistContainer>
      <ScrollView>
        <PlaylistHeader colors={[colors.primary30, colors.neutral5]}>
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
            <CirclePlayButton
              onPress={togglePaused}
              width="52px"
              height="52px"
              />
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
