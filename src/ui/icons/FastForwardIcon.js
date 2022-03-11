import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../theme";

const FastForwardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 0 24 24"
    width="36px"
    fill={colors.neutral98}
    {...props}
  >
    <Path d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z" />
  </Svg>
);

export default FastForwardIcon;
