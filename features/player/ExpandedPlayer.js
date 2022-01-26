import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { usePlayer } from "./PlayerState";
import AlbumArt, { FullWidthAlbumArt } from "../playlists/AlbumArt";
import PlayPauseButton from "./PlayPauseButton";
import TrackPositionBar from "./TrackPositionBar";

const PlayerContainer = styled(View)`
  width: 100%;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.neutral5};
  z-index: 100;
  padding-bottom: 60px;
`;

const StyledAlbumArt = styled(AlbumArt)`
  width: 64px;
  height: 64px;
`;

const PlayerTextContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PlayerControls = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ExpandedPlayer = () => {
  const { track, isPlaying, togglePaused } = usePlayer();

  return (
    track && (
      <PlayerContainer>
        <FullWidthAlbumArt track={track} />
        <PlayerTextContainer>
          <H3>{track.name}</H3>
          <Text>{track.artistName}</Text>
        </PlayerTextContainer>
        <PlayerControls>
          <PlayPauseButton isPlaying={isPlaying} onPress={togglePaused} />
        </PlayerControls>
        {/*<TrackPositionBar />*/}
      </PlayerContainer>
    )
  );
};

export default ExpandedPlayer;
