import React from "react";
import PlayIcon from "../../ui/icons/PlayIcon";
import IconButton from "../../ui/inputs/IconButton";
import PauseIcon from "../../ui/icons/PauseIcon";
import CirclePlayIcon from "../../ui/icons/CirclePlayIcon";

const PlayPauseButton = ({ isPlaying, onPress, ...props }) => (
  <IconButton
    onPress={onPress}
    Icon={isPlaying ? PauseIcon : PlayIcon}
    {...props}
  />
);

export default PlayPauseButton;

export const CirclePlayButton = ({ onPress, ...props }) => (
  <IconButton
    onPress={onPress}
    Icon={CirclePlayIcon}
    {...props}
  />
);
