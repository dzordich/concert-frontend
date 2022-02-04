import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { usePlayer } from "./PlayerState";
import AlbumArt from "../playlists/AlbumArt";
import PlayPauseButton from "./PlayPauseButton";
import TrackPositionBar from "./TrackPositionBar";
import IconButton from "../../ui/inputs/IconButton";
import FastForwardIcon from "../../ui/icons/FastForwardIcon";
import RewindIcon from "../../ui/icons/RewindIcon";

const PlayerContainer = styled(View)`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.neutral5};
  z-index: 100;
  padding-bottom: 60px;
`;

const PlayerTextContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SongTitle = styled(H3)`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
`;

const PlayerControls = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ExpandedPlayer = () => {
  const {
    currentTrack: { url, title, artist, artwork },
    playing,
    togglePaused,
    skip,
    rewind,
  } = usePlayer();

  return (
    url && (
      <PlayerContainer>
        <AlbumArt size="full" url={artwork} />
        <PlayerTextContainer>
          <SongTitle>{title}</SongTitle>
          <Text>{artist}</Text>
        </PlayerTextContainer>
        <PlayerControls>
          <IconButton Icon={RewindIcon} onPress={rewind} />

          <PlayPauseButton
            isPlaying={playing}
            onPress={togglePaused}
            width="52px"
            height="52px"
          />
          <IconButton
            Icon={FastForwardIcon}
            onPress={skip}
            width="36px"
            height="36px"
          />
        </PlayerControls>
        <TrackPositionBar />
      </PlayerContainer>
    )
  );
};

export default ExpandedPlayer;
