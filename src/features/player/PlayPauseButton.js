import React from "react";
import PlayIcon from "../../ui/icons/PlayIcon";
import IconButton from "../../ui/inputs/IconButton";
import PauseIcon from "../../ui/icons/PauseIcon";

const PlayPauseButton = ({ isPlaying, onPress }) => (
  <IconButton onPress={onPress} Icon={isPlaying ? PauseIcon : PlayIcon} />
);

export default PlayPauseButton;
