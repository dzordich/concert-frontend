import React from "react";
import { Pressable } from "react-native";

const IconButton = ({ Icon, onPress, iconProps }) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => <Icon fillOpacity={pressed ? 0.5 : 1} {...iconProps} />}
  </Pressable>
);

export default IconButton;
