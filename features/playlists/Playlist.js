import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View, ScrollView, FlatList } from "react-native";
import { useCities } from "../cities/CityProvider";
import { listShows } from "../../api/shows";
import { colors } from "../../ui/theme";
import { H2, H3, Text } from "../../ui/Text";
import AlbumArt from "./AlbumArt";
import { formatDateWithoutYear } from "../../utils/dates";

const PlaylistContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

const TrackText = styled(View)`
  margin-left: 16px;
`;

const TrackSubText = styled(Text)`
  color: ${colors.neutral80};
`;

const Playlist = ({ route }) => {
  const [shows, setShows] = useState(null);
  const { selectedCity } = useCities();
  const { displayName, startDate, endDate } = route.params;

  useEffect(() => {
    listShows({ city: selectedCity, startDate, endDate }).then((shows) =>
      setShows(
        shows.reduce(
          (acc, show, showIdx) => [
            ...acc,
            ...show.performers.map((performer, performerIdx) => ({
              performer,
              venue: show.venue,
              key: `${showIdx}.${performerIdx}`,
            })),
          ],
          []
        )
      )
    );
  }, [selectedCity, startDate, endDate]);

  return (
    <PlaylistContainer>
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
      <FlatList
        data={shows}
        renderItem={({ item: { performer, venue } }) => (
          <View>
            <Track>
              <AlbumArt track={performer.top_track} />
              <TrackText>
                <H3>{performer.top_track.name}</H3>
                <TrackSubText>{performer.name}</TrackSubText>
                <TrackSubText>{venue.name}</TrackSubText>
              </TrackText>
            </Track>
          </View>
        )}
      />
    </PlaylistContainer>
  );
};

export default Playlist;
