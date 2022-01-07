import React from "react";
import { Pressable } from "react-native";

const IconButton = ({ Icon, onPress }) => (
  <Pressable onPress={onPress}>
    {(isPressed) => <Icon fillOpacity={isPressed ? 0.7 : 1} />}
  </Pressable>
);

export default IconButton;
