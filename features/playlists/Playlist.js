import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View, ScrollView } from "react-native";
import { prop } from "ramda";
import { useCities } from "../cities/CityProvider";
import { listShows } from "../../api/shows";
import { colors } from "../../ui/theme";
import { H2, Text } from "../../ui/Text";
import { formatDateWithoutYear } from "../../utils/dates";
import { usePlayer } from "../player/PlayerState";
import Track from "./Track";

const PlaylistContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  background-color: ${colors.neutral10};
  padding-top: 8px;
`;

const PlaylistHeader = styled(View)`
  border-bottom-color: ${colors.primary80};
  border-bottom-width: 1px;
  padding: 16px;
  margin-bottom: 8px;
`;

const addPerformerToTopTrack = (performer) => ({
  ...performer,
  top_track: {
    ...performer.top_track,
    artistName: performer.name,
  },
});

const Playlist = ({ route }) => {
  const [performers, setPerformers] = useState([]);
  const { selectedCity } = useCities();
  const { playTrack, updateQueue, track } = usePlayer();
  const { displayName, startDate, endDate } = route.params;

  useEffect(() => {
    listShows({ city: selectedCity, startDate, endDate }).then((response) =>
      setPerformers(response.map(addPerformerToTopTrack))
    );
  }, [selectedCity, startDate, endDate]);

  const onSongPress = async (song, index) => {
    if (song.preview_url) {
      await playTrack(song);
      if (index < performers.length) {
        updateQueue(
          performers.slice(index + 1, performers.length).map(prop("top_track"))
        );
      }
    }
  };

  return (
    <PlaylistContainer>
      <ScrollView>
        <PlaylistHeader>
          <H2>{displayName}</H2>
          <Text>
            {startDate === endDate
              ? formatDateWithoutYear(startDate)
              : `${formatDateWithoutYear(startDate)} - ${formatDateWithoutYear(
                  endDate
                )}`}
          </Text>
        </PlaylistHeader>
        {performers &&
          performers.map(
            (performer, idx) =>
              performer.top_track && (
                <Track
                  performer={performer}
                  onPress={onSongPress}
                  trackIndex={idx}
                  currentTrack={track}
                  key={idx}
                />
              )
          )}
      </ScrollView>
    </PlaylistContainer>
  );
};

export default Playlist;
