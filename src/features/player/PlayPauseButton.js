import React from 'react';
import styled from 'styled-components/native';
import PlayIcon from '../../ui/icons/PlayIcon';
import IconButton from '../../ui/inputs/IconButton';
import PauseIcon from '../../ui/icons/PauseIcon';
import { colors } from '../../ui/theme';
import { usePlayer } from './PlayerState';

const PlayPauseButton = ({ isPlaying, onPress, ...props }) => (
    <IconButton
        onPress={onPress}
        Icon={isPlaying ? PauseIcon : PlayIcon}
        {...props}
    />
);

export default PlayPauseButton;

const Circle = styled.Pressable`
    padding: 8px;
    height: 52px;
    width: 52px;
    border-radius: 26px;
    background-color: ${colors.primary60};
    overflow: hidden;
`;

export const CirclePlayButton = ({ onPress, ...props }) => {
    const { playing, togglePaused, currentTrack } = usePlayer();
    return (
        <Circle onPress={() => (currentTrack.url ? togglePaused() : onPress())}>
            {playing ? (
                <PauseIcon fill={colors.neutral5} />
            ) : (
                <PlayIcon fill={colors.neutral5} />
            )}
        </Circle>
    );
};
