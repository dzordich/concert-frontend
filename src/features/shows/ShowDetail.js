import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Display, H2, H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { AlbumArtBackground } from "../playlists/AlbumArt";
import { LinearGradient } from "expo-linear-gradient";
import PaginatedCarousel from "../../ui/layout/PaginatedCarousel";
import Button from "../../ui/inputs/Button";
import { displayDate } from "../../utils/dates";

const ShowDetailsContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.neutral10};
`;

const ShowHeader = styled(View)``;

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
`;

const ShowContainer = styled(View)`
  padding: 16px;
`;

const VenueLink = styled(Button)`
  background-color: ${colors.primary60};
  margin-top: 24px;
`;

const Show = ({ venue, start_date, start_time }) => (
  <ShowContainer>
    <H2>{venue.name}</H2>
    <Text>
      {displayDate(start_date)}
      {start_time ? `  •  ${start_time}` : ""}
    </Text>
    <VenueLink onPress={() => {}} activeOpacity={0.6}>
      <Text>Venue Website</Text>
    </VenueLink>
  </ShowContainer>
);

const ShowDetails = ({ route }) => {
  const { name, shows, top_track } = route.params;

  return (
    <ShowDetailsContainer>
      <ShowHeader>
        <AlbumArtBackground url={top_track.album_art_url}>
          <Gradient colors={["transparent", colors.neutral5]}>
            <Display>{name}</Display>
          </Gradient>
        </AlbumArtBackground>
      </ShowHeader>
      <PaginatedCarousel
        data={shows}
        renderItem={({ item }) => <Show {...item} />}
      />
      {/*<StyledMap*/}
      {/*  initialRegion={{*/}
      {/*    latitude: Number(venue.lat),*/}
      {/*    longitude: Number(venue.lng),*/}
      {/*    latitudeDelta: 0.01,*/}
      {/*    longitudeDelta: 0.01,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Marker*/}
      {/*    coordinate={{*/}
      {/*      latitude: Number(venue.lat),*/}
      {/*      longitude: Number(venue.lng),*/}
      {/*    }}*/}
      {/*    title={venue.name}*/}
      {/*  />*/}
      {/*</StyledMap>*/}
    </ShowDetailsContainer>
  );
};

export default ShowDetails;
