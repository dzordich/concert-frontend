import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight, View } from 'react-native';
import { any } from 'ramda';
import { H4, Text } from '../../ui/Text';
import { colors } from '../../ui/theme';
import AlbumArt from './AlbumArt';
import ShiftRight from '../../ui/layout/ShiftRight';
import IconButton from '../../ui/inputs/IconButton';
import InfoIcon from '../../ui/icons/InfoIcon';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import { FreeMarker, FestivalMarker } from '../../ui/Marker';
import { useLikedShows } from '../../utils/hooks/LikedShowsState';
import FilledInHeartIcon from '../../ui/icons/FilledInHeartIcon';

const TrackContainer = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    margin: 8px;
    margin-bottom: 0;
    z-index: -1;
`;

const MainContent = styled(View)`
    flex: 1;
    flex-direction: row;
    border-bottom-color: ${colors.neutral10};
    border-bottom-width: ${props => (props.showBorder ? '1px' : '0')};
    border-bottom-style: solid;
    align-items: center;
    margin-left: 16px;
    margin-right: 8px;
    height: 56px;
    padding-bottom: 4px;
`;

const TrackTitle = styled(H4)`
    margin-top: 4px;
    ${props => (props.currentTrack ? `color: ${colors.primary80};` : '')}
`;

const VenueName = styled(Text)`
    color: ${colors.neutral80};
    margin-top: 4px;
    ${props => (props.currentTrack ? `color: ${colors.primary80};` : '')}
`;

const TrackText = styled(View)`
    flex: 1;
`;

const TrackSubText = styled(Text)`
    color: ${colors.neutral80};
    font-size: 12px;
`;

const hasFreeShow = any(show => !!show.free);

const Track = ({
    performer,
    onPress,
    currentTrack,
    trackIndex,
    isLastTrack,
}) => {
    const { top_track: track, name, shows } = performer;
    const { isShowLiked } = useLikedShows();

    return (
        <TouchableHighlight
            onPress={async () => onPress(trackIndex)}
            activeOpacity={1}
            underlayColor={colors.neutral5}
        >
            <TrackContainer>
                <AlbumArt url={track?.album_art_url} />
                <MainContent showBorder={!isLastTrack}>
                    <TrackText>
                        <TrackSubText numberOfLines={1}>
                            {track.name}
                        </TrackSubText>

                        <TrackTitle
                            currentTrack={
                                track && track.id === currentTrack?.id
                            }
                            numberOfLines={1}
                        >
                            {name}
                            <VenueName
                                numberOfLines={1}
                                currentTrack={
                                    track && track.id === currentTrack?.id
                                }
                            >
                                {shows.length > 0
                                    ? ` — ${shows[0].venue.name}`
                                    : ''}
                            </VenueName>
                        </TrackTitle>
                    </TrackText>
                    <ShiftRight style={{ marginRight: 0, paddingLeft: 8 }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                paddingLeft: 4,
                            }}
                        >
                            <FestivalMarker
                                shows={shows}
                                style={{ marginRight: 8 }}
                            />
                            <FreeMarker free={hasFreeShow(shows)} />
                            {shows.some(({ id }) => isShowLiked(id)) && (
                                <FilledInHeartIcon
                                    width="14px"
                                    height="14px"
                                    style={{ marginLeft: 8 }}
                                />
                            )}
                            <IconButton
                                Icon={InfoIcon}
                                onPress={() =>
                                    navigate(PATHS.SHOW_DETAILS, performer)
                                }
                            />
                        </View>
                    </ShiftRight>
                </MainContent>
            </TrackContainer>
        </TouchableHighlight>
    );
};

export default Track;
