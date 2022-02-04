import React from "react";
import styled, { css } from "styled-components";
import { Image, View, Dimensions } from "react-native";

const sizes = {
  small: 52,
  medium: 60,
  full: Dimensions.get("window").width,
};

const getSizeFromProps = (props) => sizes[props.size];

const layout = css`
  width: ${(props) => getSizeFromProps(props)}px;
  height: ${(props) => getSizeFromProps(props)}px;
  border-radius: ${(props) => (props.size === "full" ? "0" : "1px")};
`;

const AlbumArtImage = styled(Image)`
  ${layout}
`;

const EmptyAlbumArt = styled(View)`
  background-color: black;
  ${layout}
`;

const AlbumArt = ({ url, size = "small" }) =>
  url ? (
    <AlbumArtImage source={{ uri: url }} size={size} />
  ) : (
    <EmptyAlbumArt size={size} />
  );

export default AlbumArt;
