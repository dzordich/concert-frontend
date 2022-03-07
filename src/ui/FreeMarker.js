import React from "react";
import styled from "styled-components/native";
import { colors } from "./theme";

const Marker = styled.Text`
  color: ${colors.primary70};
  font-size: 13px;
  padding: 4px;
  border: 1px solid ${colors.primary70};
  border-radius: 4px;
`;

const FreeMarker = () => <Marker>FREE</Marker>;

export default FreeMarker;
