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
import TicketIcon from "../../ui/icons/TicketIcon";
import ShareIcon from "../../ui/icons/ShareIcon";
import {shareShow} from "../../utils/sms";

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

const VenueLinkContainer = styled(View)`
  flex-direction: row;
  width: 100%;
`

const VenueLink = styled(Button)`
  color: ${colors.primary60};
  width: 50%;
  margin: 24px 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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


const Show = ({ venue, start_date, start_time, free, festival, mainPerformer, performers }) =>{
    const otherPerformers = performers.filter((performer) => performer.name !== mainPerformer)
    return (
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
            <VenueLinkContainer>
                <VenueLink
                    onPress={() => venue.website && Linking.openURL(venue.website)}
                    activeOpacity={0.6}
                    style={{borderRightColor: colors.neutral20, borderRightWidth: 1}}
                >
                    <TicketIcon style={{color: colors.primary60, marginRight: 8}}/><Text style={{color: colors.primary70}}>Tickets</Text>
                </VenueLink>
                <VenueLink
                    onPress={() => shareShow(mainPerformer, venue.name, displayDate(start_date))}
                    activeOpacity={0.6}
                >
                    <ShareIcon style={{color: colors.primary60, marginRight: 8}}/><Text style={{color: colors.primary70}}>Share</Text>
                </VenueLink>
            </VenueLinkContainer>

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
}

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
            renderItem={({ item }) => <Show {...item} mainPerformer={name} />}
          />
        ) : (
          <Show {...shows[0]} mainPerformer={name} />
        )}
      </ScrollView>
    </ShowDetailsContainer>
  );
};

export default ShowDetails;
