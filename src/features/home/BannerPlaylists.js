import React from "react";
import styled from "styled-components/native";
import {ImageBackground, Pressable} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import PaginatedCarousel from "../../ui/layout/PaginatedCarousel";
import { H2 } from "../../ui/Text";
import { getWindowWidth } from "../../utils/dimensions";
import {navigate} from "../../utils/navigation";
import PATHS from "../../contants/paths";
import {useBannerPlaylists} from "../playlists/BannerPlaylistProvider";
import {colors} from "../../ui/theme";

const Container = styled.View`
  margin-horizontal: 12px;
`;

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const BannerPlaylist = styled(({ style, playlist }) => (
    <Pressable onPress={() => navigate(PATHS.BANNER_PLAYLIST, playlist)}>
  <ImageBackground style={style} source={{ uri: playlist.background }}>
      <Gradient colors={["transparent", colors.neutral5]} >
    <H2>{playlist.title}</H2>
      </Gradient>
  </ImageBackground>
    </Pressable>
))`
  width: ${getWindowWidth() - 24}px;
  height: 150px;
  border-radius: 4px;
  overflow: hidden;
`;

const BannerPlaylists = () => {
  const {banners} = useBannerPlaylists()

  return (
    <Container>
      {banners ? (
        <PaginatedCarousel
          data={banners}
          renderItem={({ item }) => <BannerPlaylist playlist={item} />}
        />
      ) : null}
    </Container>
  );
};

export default BannerPlaylists