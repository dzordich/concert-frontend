import React from "react";
import PlayIcon from "../../ui/icons/PlayIcon";
import IconButton from "../../ui/inputs/IconButton";
import PauseIcon from "../../ui/icons/PauseIcon";

const PlayPauseButton = ({ isPlaying, onPress, ...props }) => (
  <IconButton
    onPress={onPress}
    Icon={isPlaying ? PauseIcon : PlayIcon}
    iconProps={props}
  />
);

export default PlayPauseButton;
