import React from "react";
import styled from "styled-components/native";
import { TouchableHighlight, View } from "react-native";
import PATHS from "../../contants/paths";
import { colors } from "../../ui/theme";
import {H2, H3} from "../../ui/Text";
import {getWindowWidth} from "../../utils/dimensions";

const PlaylistLinkContainer = styled(View)`
  margin-left: 12px;
`;

const playlistLinkHeight = () => (getWindowWidth() - 44) / 2;

const PlaylistLinkBackground = styled.ImageBackground`
  height: ${playlistLinkHeight()}px;
  width: ${playlistLinkHeight()}px;
  padding: 12px;
  border-radius: 4px;
  padding-right: 20%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.secondary80};
  overflow: hidden;
  
`;

const StyledHighlight = styled(TouchableHighlight)`
  border-radius: 10px;
`;

const PlaylistLink = ({ playlist, navigation }) => {
    const {displayName, background, subHeader} = playlist;

  return (
    <PlaylistLinkContainer>
      <StyledHighlight
        onPress={() => navigation.navigate(PATHS.PLAYLIST, playlist)}
      >
        <PlaylistLinkBackground source={background}>
            <H3>{subHeader}</H3>
          <H2>{displayName}</H2>
        </PlaylistLinkBackground>
      </StyledHighlight>
    </PlaylistLinkContainer>
  );
};

export default PlaylistLink;
