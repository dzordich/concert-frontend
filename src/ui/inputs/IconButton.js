import React from "react";
import styled from 'styled-components/native'
import { Pressable } from "react-native";

const IconButton = ({ Icon, onPress, iconProps, style }) => (
  <Pressable onPress={onPress} style={style}>
    {({ pressed }) => <Icon fillOpacity={pressed ? 0.5 : 1} {...iconProps} />}
  </Pressable>
);

export default styled(IconButton)``;
