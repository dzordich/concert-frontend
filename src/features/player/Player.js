import React, { useMemo } from 'react';
import styled from 'styled-components';
import { View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H3, Text } from '../../ui/Text';
import { colors } from '../../ui/theme';
import { usePlayer } from './PlayerState';
import PlayPauseButton from './PlayPauseButton';
import ShiftRight from '../../ui/layout/ShiftRight';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import TrackPositionBar from './TrackPositionBar';
import IconButton from '../../ui/inputs/IconButton';
import FastForwardIcon from '../../ui/icons/FastForwardIcon';
import HeartIcon from '../../ui/icons/HeartIcon';
import { useLikedShows } from '../../utils/hooks/LikedShowsState';
import FilledInHeartIcon from '../../ui/icons/FilledInHeartIcon';
import LikeShowButton from '../../ui/inputs/LikeShowButton';
import { OpenSpotifyLink } from '../shows/OpenSpotifyButton';

const PlayerContainer = styled(View)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    flex: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.primary10};
`;

const PlayerInnerContainer = styled(View)`
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0 16px;
    height: 60px;
`;

const PlayerTextContainer = styled(View)`
    margin-left: 16px;
    overflow: hidden;
    max-width: 100%;
    flex: 1;
`;

const ArtistName = styled(Text)`
    color: ${colors.neutral80};
`;

const PlayerButtons = styled(ShiftRight)`
    flex-direction: row;
    align-items: center;
`;

const Player = () => {
    const { bottom } = useSafeAreaInsets();
    const {
        currentTrack: { title, artist, url, artistInfo, spotifyUri },
        playing,
        togglePaused,
        skip,
    } = usePlayer();

    if (!url) {
        return null;
    }

    return (
        <Pressable onPress={() => navigate(PATHS.SHOW_DETAILS, artistInfo)}>
            <PlayerContainer
                style={{
                    paddingBottom: bottom,
                }}
            >
                <TrackPositionBar
                    disabled={true}
                    containerStyle={{ height: 4, alignSelf: 'stretch' }}
                />
                <PlayerInnerContainer>
                    <PlayerTextContainer>
                        <ArtistName numberOfLines={1}>{title}</ArtistName>
                        <H3 numberOfLines={1}>{artist}</H3>
                    </PlayerTextContainer>
                    <PlayerButtons>
                        <LikeShowButton
                            showId={artistInfo.shows[0].id}
                            style={{ marginRight: 4 }}
                        />
                        <PlayPauseButton
                            isPlaying={playing}
                            onPress={togglePaused}
                        />
                        <IconButton
                            Icon={FastForwardIcon}
                            onPress={skip}
                            width="36px"
                            height="36px"
                        />
                    </PlayerButtons>
                </PlayerInnerContainer>
                <OpenSpotifyLink
                    spotifyUri={artistInfo.top_track.spotify_uri}
                />
            </PlayerContainer>
        </Pressable>
    );
};

export default Player;

export const PlayerSafeArea = ({ children }) => {
    const { bottom } = useSafeAreaInsets();
    const { currentTrack, expanded } = usePlayer();
    const playerHeight = useMemo(
        () => (currentTrack?.url ? (expanded ? 218 : 64 + bottom) : 0),
        [currentTrack]
    );
    return (
        <View style={{ paddingBottom: playerHeight, height: '100%' }}>
            {children}
        </View>
    );
};
