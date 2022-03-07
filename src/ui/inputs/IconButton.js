import React from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";

const IconButton = ({ Icon, onPress, ...props }) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => <Icon fillOpacity={pressed ? 0.5 : 1} {...props} />}
  </Pressable>
);

export default styled(IconButton)``;
