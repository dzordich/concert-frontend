import React from "react";
import Svg, { Path } from "react-native-svg";

const PauseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    fill="#FFF"
    viewBox="0 0 24 24"
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </Svg>
);

export default PauseIcon;
