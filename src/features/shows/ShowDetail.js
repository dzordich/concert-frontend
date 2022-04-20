import React from "react";
import styled from "styled-components";
import { View, ScrollView, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { prop } from "ramda";
import { LinearGradient } from "expo-linear-gradient";
import { Display, H2, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { AlbumArtBackground } from "../playlists/AlbumArt";
import PaginatedCarousel from "../../ui/layout/PaginatedCarousel";
import Button from "../../ui/inputs/Button";
import { displayDate } from "../../utils/dates";
import BackButton from "../../ui/actions/BackButton";
import { FreeMarker, FestivalMarker } from "../../ui/Marker";
import ShiftRight from "../../ui/layout/ShiftRight";
import { formatTime } from "../../utils/time";
import {formatList, isNotEmpty} from "../../utils/arrays";

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
  padding: 16px;
`;

const ShowContainer = styled(View)`
  padding: 16px;
`;

const VenueLink = styled(Button)`
  color: ${colors.primary60};
  border: 1px solid ${colors.primary60};
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


const Show = ({ venue, start_date, start_time, free, festival, otherPerformers }) =>(
        <ShowContainer>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                <VenueName>{venue.name}</VenueName>
                <ShiftRight>
                    <FestivalMarker festival={festival} long />
                    <FreeMarker free={free} />
                </ShiftRight>
            </View>
            {isNotEmpty(otherPerformers) && <Text style={{marginBottom: 8}}>
                With {formatList(otherPerformers.map(prop("name")))}
            </Text>}
            <Text>
                {displayDate(start_date)}
                {start_time ? `  •  ${formatTime(start_time)}` : ""}
            </Text>
            <VenueLink
                onPress={() => venue.website && Linking.openURL(venue.website)}
                activeOpacity={0.6}
            >
                <Text style={{color: colors.primary60}}>Purchase Tickets</Text>
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
)

const ShowDetails = ({ route, navigation }) => {
  const { name, shows, top_track } = route.params;

  return (
    <ShowDetailsContainer>
      <BackButton
        navigation={navigation}
      />
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
            renderItem={({ item }) => <Show {...item} otherPerformers={item.performers.filter((performer) => performer.name !== name)} />}
          />
        ) : (
          <Show {...shows[0]} otherPerformers={shows[0].performers.filter((performer) => performer.name !== name)} />
        )}
      </ScrollView>
    </ShowDetailsContainer>
  );
};

export default ShowDetails;
