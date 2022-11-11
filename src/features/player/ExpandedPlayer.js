import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { H3, Text } from '../../ui/Text';
import { colors } from '../../ui/theme';
import { usePlayer } from './PlayerState';
import AlbumArt from '../playlists/AlbumArt';
import PlayPauseButton from './PlayPauseButton';
import TrackPositionBar from './TrackPositionBar';
import IconButton from '../../ui/inputs/IconButton';
import FastForwardIcon from '../../ui/icons/FastForwardIcon';
import RewindIcon from '../../ui/icons/RewindIcon';
import PATHS from '../../contants/paths';
import { RelativeBackButton } from '../../ui/actions/BackButton';
import ShiftRight from '../../ui/layout/ShiftRight';
import InfoIcon from '../../ui/icons/InfoIcon';

const PlayerContainer = styled(View)`
    width: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${colors.neutral5};
    z-index: 100;
    padding: 36px 24px;
`;

const PlayerBody = styled(View)`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
`;

const PlayerTextContainer = styled(View)`
    padding-top: 48px;
    padding-bottom: 24px;
    flex-direction: row;
`;

const SongTitle = styled(H3)`
    font-size: 18px;
    margin-top: 4px;
    font-weight: 600;
`;

const TrackSubText = styled(Text)`
    color: ${colors.neutral80};
    font-size: 16px;
    font-weight: normal;
`;

const PlayerControls = styled(View)`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const ExpandedPlayer = ({ navigation }) => {
    const {
        currentTrack: { title, artist, artwork, artistInfo },
        playing,
        togglePaused,
        skip,
        rewind,
    } = usePlayer();

    return (
        <PlayerContainer>
            <RelativeBackButton
                navigation={navigation}
                style={{ transform: [{ rotate: '-90deg' }] }}
                containerStyle={{ height: 24, marginBottom: 48 }}
            />
            <AlbumArt size="large" url={artwork} />
            <PlayerBody>
                <PlayerTextContainer>
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
                                navigation.goBack();
                                navigation.navigate(
                                    PATHS.SHOW_DETAILS,
                                    artistInfo
                                );
                            }}
                        />
                    </ShiftRight>
                </PlayerTextContainer>
                <TrackPositionBar />
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
            </PlayerBody>
        </PlayerContainer>
    );
};

export default ExpandedPlayer;
