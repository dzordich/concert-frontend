import React from "react";
import Svg, { Path } from "react-native-svg";

const FastForwardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height="28px"
    viewBox="0 0 24 24"
    width="28px"
    fill="#FFFFFF"
    {...props}
  >
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
  </Svg>
);

export default FastForwardIcon;