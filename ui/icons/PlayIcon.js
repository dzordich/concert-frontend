import React from "react";
import Svg, { Path } from "react-native-svg";

const PlayIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    fill="#FFF"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M8 5v14l11-7z" />
  </Svg>
);

export default PlayIcon;
