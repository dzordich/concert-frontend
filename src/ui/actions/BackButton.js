import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../inputs/IconButton";
import BackIcon from "../icons/BackIcon";
import React from "react";

const BackButtonContainer = styled(SafeAreaView)`
  position: absolute;
  top: 10px;
  left: 4px;
  z-index: 9;
`;

const BackButton = ({ style, navigation }) => (
  <BackButtonContainer>
    <IconButton
      Icon={BackIcon}
      onPress={() => navigation.goBack()}
      iconProps={{ style }}
    />
  </BackButtonContainer>
);

export default styled(BackButton)``;
