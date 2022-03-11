import React from "react";
import Svg, { Path } from "react-native-svg";
import {colors} from "../theme";

const PauseIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill={colors.neutral98} {...props}><Path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></Svg>
);

export default PauseIcon;
