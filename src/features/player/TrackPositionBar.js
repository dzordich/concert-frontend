import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dimensions, View } from "react-native";
import { colors } from "../../ui/theme";
import { usePlayer } from "./PlayerState";
import { Slider } from "@miblanchard/react-native-slider";

const windowWidth = Dimensions.get("window").width;

const BarBackground = styled(View)`
  width: 100%;
  height: 4px;
  background-color: ${colors.neutral98};
`;

const Bar = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  height: 4px;
  background-color: ${colors.secondary60};
  z-index: 200;
`;

const TrackPositionBar = () => {
  const { sound } = usePlayer();
  const [position, setPosition] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const refreshPosition = async () => {
    if (sound) {
      const { positionMillis, durationMillis } = await sound.getStatusAsync();
      const pos = positionMillis / durationMillis;
      setPosition(pos);
    }
  };

  useEffect(() => {
    clearInterval(intervalId);
    const id = setInterval(refreshPosition, 100);
    setIntervalId(id);
    return () => {
      clearInterval(intervalId);
    };
  }, [sound]);

  return <Slider value={position} />;
};

export default TrackPositionBar;
