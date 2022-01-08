import React from "react";
import styled, { css } from "styled-components";
import { Image, View } from "react-native";

const layout = css`
  width: 52px;
  height: 52px;
  border-radius: 1px;
`;

const AlbumArtImage = styled(Image)`
  ${layout}
`;

const EmptyAlbumArt = styled(View)`
  background-color: black;
  ${layout}
`;

const AlbumArt = ({ track }) =>
  track?.album_art_url ? (
    <AlbumArtImage source={{ uri: track.album_art_url }} />
  ) : (
    <EmptyAlbumArt />
  );

export default AlbumArt;
