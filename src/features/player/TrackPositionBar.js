import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { roundTo2Decimals } from "../../utils/numbers";
import { colors } from "../../ui/theme";

const TrackPositionBar = (props) => {
  const { position, duration } = useProgress(50);

  const onSlidingStart = async () => {
    await TrackPlayer.pause();
  };
  const onSlidingComplete = async (value) => {
    await TrackPlayer.seekTo(roundTo2Decimals(value * duration));
    await TrackPlayer.play();
  };
  return (
    <Slider
      value={position / duration}
      onSlidingStart={onSlidingStart}
      onSlidingComplete={onSlidingComplete}
      thumbStyle={{ height: 16, width: 16 }
        }
      renderThumbComponent={props.disabled ? () => null : null}
      thumbTintColor={colors.secondary50}
      minimumTrackTintColor={colors.secondary50}
      maximumTrackTintColor={colors.neutral80}
      {...props}
    />
  );
};

export default TrackPositionBar;
