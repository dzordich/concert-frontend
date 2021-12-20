import React from "react";
import styled from "styled-components";
import { TouchableHighlight, View, Text } from "react-native";
import PATHS from "../../contants/paths";

const PlaylistLinkContainer = styled(View)`
  margin-vertical: 8px;
`;

const PlaylistLinkInner = styled(View)`
  height: 160px;
  width: 160px;
  padding: 16px;
  border-radius: 10px;
  flex-direction: column-reverse;
  background-color: aquamarine;
`;

const StyledHighlight = styled(TouchableHighlight)`
  border-radius: 10px;
`;

const PlaylistLink = ({ playlist, navigation }) => {
  return (
    <PlaylistLinkContainer>
      <StyledHighlight
        onPress={() => navigation.navigate(PATHS.PLAYLIST, playlist)}
      >
        <PlaylistLinkInner>
          <Text>{playlist.displayName}</Text>
        </PlaylistLinkInner>
      </StyledHighlight>
    </PlaylistLinkContainer>
  );
};

export default PlaylistLink;
