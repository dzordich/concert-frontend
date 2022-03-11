import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { compose, prop } from "ramda";
import { useCities } from "../cities/CityProvider";
import { listShows } from "../../api/shows";
import { colors } from "../../ui/theme";
import { H2, Text } from "../../ui/Text";
import { formatDateWithoutYear } from "../../utils/dates";
import { usePlayer } from "../player/PlayerState";
import Track from "./Track";
import { PlaylistCard } from "../home/PlaylistLink";
import { CirclePlayButton } from "../player/PlayPauseButton";

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

const PlaylistHeaderCard = styled(PlaylistCard)`
  width: 140px;
  height: 140px;
  margin-right: 16px;
  padding: 8px;
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

const Playlist = ({ route }) => {
  const [performers, setPerformers] = useState([]);
  const { selectedCity } = useCities();
  const {
    play,
    updateQueue,
    currentTrack,
    playing,
    togglePaused,
  } = usePlayer();
  const { displayName, startDate, endDate, backgroundColor } = route.params;

  useEffect(() => {
    listShows({ city: selectedCity, startDate, endDate }).then((response) =>
      setPerformers(response.map(addPerformerToTopTrack))
    );
  }, [selectedCity, startDate, endDate]);

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
        <PlaylistHeader colors={[backgroundColor, colors.neutral5]}>
          <PlaylistHeaderCard {...route.params} />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <PlaylistHeaderText>{displayName}</PlaylistHeaderText>
            <Text style={{ paddingBottom: 8 }}>
              {startDate === endDate
                ? formatDateWithoutYear(startDate)
                : `${formatDateWithoutYear(
                    startDate
                  )} - ${formatDateWithoutYear(endDate)}`}
            </Text>
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

export default Playlist;
