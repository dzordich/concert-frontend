import React from "react";
import styled from "styled-components/native";
import { TouchableHighlight, View } from "react-native";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import AlbumArt from "./AlbumArt";
import ShiftRight from "../../ui/layout/ShiftRight";
import IconButton from "../../ui/inputs/IconButton";
import InfoIcon from "../../ui/icons/InfoIcon";
import { navigate } from "../../utils/navigation";
import PATHS from "../../contants/paths";
import {any} from "ramda";
import FreeMarker from "../../ui/FreeMarker";

const TrackContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 8px;
`;

const TrackTitle = styled(H3)`
  margin: 2px 0;
  ${(props) => (props.currentTrack ? `color: ${colors.secondary80};` : "")}
`;

const TrackText = styled(View)`
  margin-left: 16px;
  flex: 1;
`;

const TrackSubText = styled(Text)`
  color: ${colors.neutral80};
  font-size: 13px;
`;

const hasFreeShow = any(show => !!show.free)

const Track = ({ performer, onPress, currentTrack, trackIndex }) => {
  const { top_track: track, name, shows } = performer;

  return (
    <TouchableHighlight
      onPress={async () => onPress(track, trackIndex)}
      activeOpacity={1}
      underlayColor={colors.neutral5}
    >
      <TrackContainer>
        <AlbumArt url={track?.album_art_url} />
        <TrackText>
          <TrackSubText numberOfLines={1}>{track.name}</TrackSubText>

          <TrackTitle currentTrack={track && track.id === currentTrack?.id} numberOfLines={1}>
            {name}
          </TrackTitle>
          <TrackSubText numberOfLines={1}>
            {shows.length > 0 ? shows[0].venue.name : ""}
          </TrackSubText>
        </TrackText>
        <ShiftRight>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
          {hasFreeShow(shows) && <FreeMarker/>}
          <IconButton
            Icon={InfoIcon}
            onPress={() => navigate(PATHS.SHOW_DETAILS, performer)}
          />
          </View>
        </ShiftRight>
      </TrackContainer>
    </TouchableHighlight>
  );
};

export default Track;
