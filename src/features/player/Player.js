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

const PlayerContainer = styled(View)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    flex: 0;
    flex-direction: column;
    justify-content: flex-start;
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
        currentTrack: { title, artist, url, artistInfo },
        playing,
        togglePaused,
        skip,
    } = usePlayer();
    const { likeShow, dislikeShow, isShowLiked } = useLikedShows();

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
                    containerStyle={{ height: 4 }}
                />
                <PlayerInnerContainer>
                    <PlayerTextContainer>
                        <ArtistName numberOfLines={1}>{title}</ArtistName>
                        <H3 numberOfLines={1}>{artist}</H3>
                    </PlayerTextContainer>
                    <PlayerButtons>
                        {isShowLiked(artistInfo.shows[0].id) ? (
                            <IconButton
                                Icon={FilledInHeartIcon}
                                onPress={() => {
                                    console.log(artistInfo);
                                    dislikeShow(artistInfo.shows[0].id);
                                }}
                                width="20px"
                                height="20px"
                            />
                        ) : (
                            <IconButton
                                Icon={HeartIcon}
                                onPress={() => {
                                    console.log(artistInfo);
                                    likeShow(artistInfo.shows[0].id);
                                }}
                                width="20px"
                                height="20px"
                            />
                        )}
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
