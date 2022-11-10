import React from "react";
import styled from "styled-components/native";
import { TouchableHighlight, View } from "react-native";
import PATHS from "../../contants/paths";
import { colors } from "../../ui/theme";
import { H2, H3 } from "../../ui/Text";
import { getWindowWidth } from "../../utils/dimensions";
import { wrapWords } from "../../utils/strings";

const PlaylistLinkContainer = styled(View)`
  margin-left: 12px;
`;

const playlistLinkHeight = () => (getWindowWidth() - 40) / 2;

const PlaylistLinkBackground = styled.ImageBackground`
  height: ${playlistLinkHeight()}px;
  width: ${playlistLinkHeight()}px;
  padding: 12px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.secondary80};
  overflow: hidden;
`;

const StyledHighlight = styled(TouchableHighlight)`
  border-radius: 10px;
`;

export const PlaylistCard = ({ displayName, background, subHeader, style }) => (
  <PlaylistLinkBackground source={background} style={style}>
    <H3>{subHeader}</H3>
    <H2>{wrapWords(displayName)}</H2>
  </PlaylistLinkBackground>
);

const PlaylistLink = ({ playlist, navigation }) => {
  return (
    <PlaylistLinkContainer>
      <StyledHighlight
        onPress={() => navigation.navigate(PATHS.PLAYLIST, playlist)}
      >
        <PlaylistCard {...playlist} />
      </StyledHighlight>
    </PlaylistLinkContainer>
  );
};

export default PlaylistLink;
