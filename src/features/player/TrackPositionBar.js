import React from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { roundTo2Decimals } from '../../utils/numbers';
import { colors } from '../../ui/theme';

const TrackPositionBar = props => {
    const { position, duration } = useProgress(50);

    const onSlidingStart = async () => {
        await TrackPlayer.pause();
    };
    const onSlidingComplete = async value => {
        await TrackPlayer.seekTo(roundTo2Decimals(value * duration));
        await TrackPlayer.play();
    };
    return (
        <Slider
            value={position / duration}
            onSlidingStart={onSlidingStart}
            onSlidingComplete={onSlidingComplete}
            thumbStyle={{ height: 12, width: 12 }}
            renderThumbComponent={() => null}
            thumbTintColor={colors.primary80}
            minimumTrackTintColor={colors.primary80}
            maximumTrackTintColor={colors.neutral80}
            containerStyle={{ height: 24 }}
            {...props}
        />
    );
};

export default TrackPositionBar;
