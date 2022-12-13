import React from 'react';
import styled, { css } from 'styled-components/native';
import { View } from 'react-native';
import ShiftRight from '../../ui/layout/ShiftRight';
import IconButton from '../../ui/inputs/IconButton';
import InfoIcon from '../../ui/icons/InfoIcon';
import TrackPositionBar from './TrackPositionBar';
import { secondsToDisplay } from '../../utils/time';
import RewindIcon from '../../ui/icons/RewindIcon';
import PlayPauseButton from './PlayPauseButton';
import FastForwardIcon from '../../ui/icons/FastForwardIcon';
import { colors } from '../../ui/theme';
import { H3, Text } from '../../ui/Text';
import { usePlayer } from './PlayerState';
import { useProgress } from 'react-native-track-player';

const layout = css`
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${colors.primary10};
    padding: 24px;
    opacity: 0.9;
`;

const ExpandedPlayerTextContainer = styled(View)`
    padding-bottom: 16px;
    flex-direction: row;
`;

const SongTitle = styled(H3)`
    font-size: 18px;
    margin-top: 4px;
`;

const TrackSubText = styled(Text)`
    color: ${colors.neutral80};
    font-size: 16px;
    font-weight: normal;
`;

const PlayerControls = styled(View)`
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const TrackTimeContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`;
const TrackTime = styled(TrackSubText)`
    font-size: 14px;
`;

const ExpandedPlayer = ({ style }) => {
    const { position, duration } = useProgress(100);
    const {
        currentTrack: { title, artist, artwork, url, artistInfo },
        playing,
        togglePaused,
        skip,
        rewind,
    } = usePlayer();

    if (!url) {
        return null;
    }
    return (
        <View style={style}>
            <ExpandedPlayerTextContainer>
                <View>
                    <TrackSubText>{title}</TrackSubText>
                    <SongTitle numberOfLines={1}>
                        {artist}
                        <TrackSubText numberOfLines={1}>
                            {artistInfo.shows.length > 0
                                ? ` — ${artistInfo.shows[0].venue.name}`
                                : ''}
                        </TrackSubText>
                    </SongTitle>
                </View>
                <ShiftRight style={{ marginRight: 0 }}>
                    <IconButton
                        Icon={InfoIcon}
                        onPress={() => {
                            // navigation.goBack();
                            // navigation.navigate(
                            //     PATHS.SHOW_DETAILS,
                            //     artistInfo
                            // );
                        }}
                    />
                </ShiftRight>
            </ExpandedPlayerTextContainer>
            <TrackPositionBar />
            <TrackTimeContainer>
                <TrackTime>{secondsToDisplay(position)}</TrackTime>
                <TrackTime>{secondsToDisplay(duration)}</TrackTime>
            </TrackTimeContainer>
            <PlayerControls>
                <IconButton
                    Icon={RewindIcon}
                    onPress={rewind}
                    width="48px"
                    height="48px"
                />
                <PlayPauseButton
                    isPlaying={playing}
                    onPress={togglePaused}
                    width="52px"
                    height="52px"
                />
                <IconButton
                    Icon={FastForwardIcon}
                    onPress={skip}
                    width="48px"
                    height="48px"
                />
            </PlayerControls>
        </View>
    );
};

export default styled(ExpandedPlayer)`
    ${layout}
`;
