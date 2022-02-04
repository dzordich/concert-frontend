import React from "react";
import styled, { css } from "styled-components";
import { Image, View, Dimensions } from "react-native";

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

const AlbumArt = ({ url }) =>
  url ? (
    <AlbumArtImage source={{ uri: url }} />
  ) : (
    <EmptyAlbumArt />
  );

export default AlbumArt;

const windowWidth = Dimensions.get("window").width;

const fullWidthlayout = css`
  width: ${windowWidth}px;
  height: ${windowWidth}px;
  border-radius: 1px;
`;

const FullWidthAlbumArtImage = styled(Image)`
  ${fullWidthlayout}
`;

const FullWidthEmptyAlbumArt = styled(View)`
  background-color: black;
  ${fullWidthlayout}
`;

export const FullWidthAlbumArt = ({ track }) =>
  track?.album_art_url ? (
    <FullWidthAlbumArtImage source={{ uri: track.album_art_url }} />
  ) : (
    <FullWidthEmptyAlbumArt />
  );
