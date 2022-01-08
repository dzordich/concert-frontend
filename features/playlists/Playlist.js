import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View, ScrollView, FlatList, TouchableHighlight } from "react-native";
import { useCities } from "../cities/CityProvider";
import { listShows } from "../../api/shows";
import { colors } from "../../ui/theme";
import { H2, H3, Text } from "../../ui/Text";
import AlbumArt from "./AlbumArt";
import { formatDateWithoutYear } from "../../utils/dates";
import { usePlayer } from "../player/PlayerState";

const PlaylistContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.neutral10};
  padding: 8px 8px 0;
`;

const PlaylistHeader = styled(View)`
  border-bottom-color: ${colors.secondary70};
  border-bottom-width: 1px;
  padding-vertical: 16px;
  margin-bottom: 8px;
`;

const Track = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-vertical: 8px;
`;

const TrackTitle = styled(H3)`
  ${(props) => (props.currentTrack ? `color: ${colors.teal60};` : "")}
`;

const TrackText = styled(View)`
  margin-left: 16px;
`;

const TrackSubText = styled(Text)`
  color: ${colors.neutral80};
`;

const performerTopTrack = (performer) => ({
  ...performer.top_track,
  artistName: performer.name,
});

const Playlist = ({ route }) => {
  const [performers, setPerformers] = useState(null);
  const { selectedCity } = useCities();
  const { playTrack, updateQueue, track } = usePlayer();
  const { displayName, startDate, endDate } = route.params;

  useEffect(() => {
    listShows({ city: selectedCity, startDate, endDate }).then(setPerformers);
  }, [selectedCity, startDate, endDate]);

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
                <TouchableHighlight
                  key={idx}
                  onPress={async () => {
                    if (performer.top_track.preview_url) {
                      await playTrack(performerTopTrack(performer));
                      if (idx < performers.length) {
                        console.log("updating queue");
                        updateQueue(
                          performers
                            .slice(idx + 1, performers.length)
                            .map(performerTopTrack)
                        );
                      }
                    }
                  }}
                >
                  <Track>
                    <AlbumArt track={performer.top_track} />
                    <TrackText>
                      <TrackTitle
                        currentTrack={
                          track && performer.top_track.id === track.id
                        }
                      >
                        {performer.top_track.name}
                      </TrackTitle>
                      <TrackSubText>{performer.name}</TrackSubText>
                      <TrackSubText>
                        {performer.shows.length > 0
                          ? performer.shows[0].venue.name
                          : ""}
                      </TrackSubText>
                    </TrackText>
                  </Track>
                </TouchableHighlight>
              )
          )}
      </ScrollView>
    </PlaylistContainer>
  );
};

export default Playlist;
