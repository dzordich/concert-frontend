import React from "react";
import styled from "styled-components";
import { TouchableHighlight, View } from "react-native";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import AlbumArt from "./AlbumArt";
import ShiftRight from "../../ui/layout/ShiftRight";
import IconButton from "../../ui/inputs/IconButton";
import InfoIcon from "../../ui/icons/InfoIcon";
import { navigate } from "../../utils/navigation";
import PATHS from "../../contants/paths";

const TrackContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 8px;
`;

const TrackTitle = styled(H3)`
  margin-bottom: 4px;
  ${(props) => (props.currentTrack ? `color: ${colors.primary90};` : "")}
`;

const TrackText = styled(View)`
  margin-left: 16px;
`;

const TrackSubText = styled(Text)`
  color: ${colors.neutral80};
`;

const Track = ({ performer, onPress, currentTrack, trackIndex }) => {
  const { top_track: track, name, shows } = performer;

  return (
    <TouchableHighlight
      onPress={async () => onPress(track, trackIndex)}
      activeOpacity={1}
      underlayColor={colors.neutral5}
    >
      <TrackContainer>
        <AlbumArt track={track} />
        <TrackText>
          <TrackTitle currentTrack={track && track.id === currentTrack?.id}>
            {track.name}
          </TrackTitle>
          <TrackSubText>{name}</TrackSubText>
          <TrackSubText>
            {shows.length > 0 ? shows[0].venue.name : ""}
          </TrackSubText>
        </TrackText>
        <ShiftRight>
          <IconButton
            Icon={InfoIcon}
            onPress={() => navigate(PATHS.SHOW_DETAILS, performer)}
          />
        </ShiftRight>
      </TrackContainer>
    </TouchableHighlight>
  );
};

export default Track;
