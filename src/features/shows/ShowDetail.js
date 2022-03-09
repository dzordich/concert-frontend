import React from "react";
import styled from "styled-components";
import { View, ScrollView, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Display, H2, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { AlbumArtBackground } from "../playlists/AlbumArt";
import { LinearGradient } from "expo-linear-gradient";
import PaginatedCarousel from "../../ui/layout/PaginatedCarousel";
import Button from "../../ui/inputs/Button";
import { displayDate } from "../../utils/dates";
import BackButton from "../../ui/actions/BackButton";
import {FreeMarker, FestivalMarker} from "../../ui/Marker";
import ShiftRight from "../../ui/layout/ShiftRight";

const ShowDetailsContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.neutral5};
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
  background-color: ${colors.primary40};
  margin: 24px 0;
`;

const StyledMap = styled(MapView)`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
`;

const VenueName = styled(H2)`
  margin-bottom: 8px;
`;

const Show = ({ venue, start_date, start_time, free, festival }) => (
  <ShowContainer>
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <VenueName>{venue.name}</VenueName>
      <ShiftRight>
          <FestivalMarker festival={festival} />
          <FreeMarker free={free} />
        </ShiftRight>
    </View>
    <Text>
      {displayDate(start_date)}
      {start_time ? `  •  ${start_time}` : ""}
    </Text>
    <VenueLink
      onPress={() => venue.website && Linking.openURL(venue.website)}
      activeOpacity={0.6}
    >
      <Text>Purchase Tickets</Text>
    </VenueLink>

    <StyledMap
      initialRegion={{
        latitude: Number(venue.lat),
        longitude: Number(venue.lng),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: Number(venue.lat),
          longitude: Number(venue.lng),
        }}
        title={venue.name}
      />
    </StyledMap>
  </ShowContainer>
);

const ShowDetails = ({ route, navigation }) => {
  const { name, shows, top_track } = route.params;

  return (
    <ShowDetailsContainer>
      <BackButton navigation={navigation} />
      <ScrollView>
        <ShowHeader>
          <AlbumArtBackground url={top_track.album_art_url}>
            <Gradient
              colors={[colors.neutral5, "transparent", colors.neutral5]}
            >
              <Display>{name}</Display>
            </Gradient>
          </AlbumArtBackground>
        </ShowHeader>
        {shows.length > 1 ? (
          <PaginatedCarousel
            data={shows}
            renderItem={({ item }) => <Show {...item} />}
          />
        ) : (
          <Show {...shows[0]} />
        )}
      </ScrollView>
    </ShowDetailsContainer>
  );
};

export default ShowDetails;
