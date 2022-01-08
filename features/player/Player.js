import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { usePlayer } from "./PlayerState";
import AlbumArt from "../playlists/AlbumArt";
import PlayPauseButton from "./PlayPauseButton";

const PlayerContainer = styled(View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.neutral5};
`;

const StyledAlbumArt = styled(AlbumArt)`
  width: 64px;
  height: 64px;
`;

const PlayerTextContainer = styled(View)`
  margin-left: 16px;
`;

const PlayButtonContainer = styled(View)`
  margin-left: auto;
  margin-right: 16px;
`;

const Player = () => {
  const { bottom } = useSafeAreaInsets();
  const { track, sound, isPlaying, togglePaused } = usePlayer();

  return (
    track && (
      <PlayerContainer style={{ height: 60 + bottom, paddingBottom: bottom }}>
        <StyledAlbumArt track={track} />
        <PlayerTextContainer>
          <H3>{track.name}</H3>
          <Text>{track.artistName}</Text>
        </PlayerTextContainer>
        <PlayButtonContainer>
          <PlayPauseButton isPlaying={isPlaying} onPress={togglePaused} />
        </PlayButtonContainer>
      </PlayerContainer>
    )
  );
};

export default Player;
