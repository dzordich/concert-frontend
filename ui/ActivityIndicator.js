import styled from "styled-components";
import { ActivityIndicator as ReactActivityIndicator } from "react-native";
import { colors } from "./theme";

const ActivityIndicator = styled(ReactActivityIndicator)`
  color: ${colors.neutral98};
`;

export default ActivityIndicator;
