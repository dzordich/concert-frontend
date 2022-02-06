import React, { useMemo } from "react";
import styled from "styled-components";
import { View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, Text } from "../../ui/Text";
import { colors } from "../../ui/theme";
import { usePlayer } from "./PlayerState";
import AlbumArt from "../playlists/AlbumArt";
import PlayPauseButton from "./PlayPauseButton";
import ShiftRight from "../../ui/layout/ShiftRight";
import { navigate } from "../../utils/navigation";
import PATHS from "../../contants/paths";
import TrackPositionBar from "./TrackPositionBar";

const PlayerContainer = styled(View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  flex: 0;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.neutral5};
`;

const PlayerInnerContainer = styled(View)`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 60px;
`;

const PlayerTextContainer = styled(View)`
  margin-left: 16px;
  overflow: hidden;
  max-width: 100%;
`;

const ArtistName = styled(Text)`
  color: ${colors.neutral80};
`;

const Player = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    currentTrack: { title, artist, artwork, url },
    playing,
    togglePaused,
  } = usePlayer();

  return url ? (
    <Pressable onPress={() => navigate(PATHS.PLAYER_EXPANDED)}>
      <PlayerContainer
        style={{
          paddingBottom: bottom,
        }}
      >
        <TrackPositionBar disabled={true} containerStyle={{ height: 4 }} />
        <PlayerInnerContainer>
          <AlbumArt url={artwork} size="medium" />
          <PlayerTextContainer>
            <H3>{title}</H3>
            <ArtistName>{artist}</ArtistName>
          </PlayerTextContainer>
          <ShiftRight>
            <PlayPauseButton isPlaying={playing} onPress={togglePaused} />
          </ShiftRight>
        </PlayerInnerContainer>
      </PlayerContainer>
    </Pressable>
  ) : null;
};

export default Player;

export const PlayerSafeArea = ({ children }) => {
  const { bottom } = useSafeAreaInsets();
  const { currentTrack } = usePlayer();
  const playerHeight = useMemo(() => (currentTrack?.url ? 64 + bottom : 0), [
    currentTrack,
  ]);
  return (
    <View style={{ paddingBottom: playerHeight, height: "100%" }}>
      {children}
    </View>
  );
};
