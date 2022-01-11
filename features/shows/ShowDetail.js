import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { H2, H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import MapView, { Marker } from "react-native-maps";
import { FullWidthAlbumArt } from "../playlists/AlbumArt";
import { LinearGradient } from "expo-linear-gradient";

const ShowDetailsContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.neutral10};
`;

const ShowContainer = styled(View)``;

const ShowHeader = styled(View)``;

const Gradient = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledMap = styled(MapView)`
  width: 100%;
  height: 300px;
`;

const ShowDetails = ({ route }) => {
  const { name, shows, top_track } = route.params;

  return (
    <ShowDetailsContainer>
      <ShowHeader>
        <FullWidthAlbumArt track={top_track} />
        <Gradient colors={["transparent", colors.neutral5]} />

        <H2>{name}</H2>
      </ShowHeader>
      {shows.map(({ venue, start_date, start_time }, index) => {
        return (
          <ShowContainer key={index}>
            <H3>{venue.name}</H3>
            <Text>
              {start_date}
              {start_time ? `  •  ${start_time}` : ""}
            </Text>
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
      })}
    </ShowDetailsContainer>
  );
};

export default ShowDetails;
