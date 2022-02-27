import styled from "styled-components";
import { Text as NativeText } from "react-native";
import { colors } from "./theme";

export const Text = styled(NativeText)`
  color: ${colors.neutral98};
`;

export const H2 = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`;

export const H3 = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`;

export const Display = styled(Text)`
  font-size: 48px;
  font-weight: 800;
`;
