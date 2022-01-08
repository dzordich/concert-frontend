import React from "react";
import { Pressable } from "react-native";

const IconButton = ({ Icon, onPress }) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => <Icon fillOpacity={pressed ? 0.5 : 1} />}
  </Pressable>
);

export default IconButton;
