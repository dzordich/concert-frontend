import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { colors } from "./theme";

export const Layout = styled(View)`
  flex: 1;
  background-color: ${colors.neutral10};
  align-items: center;
  justify-content: center;
`;

export const ViewPort = styled(View)`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${colors.neutral10};
`;
