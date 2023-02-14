import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight, View } from 'react-native';
import { any } from 'ramda';
import { H3, Text } from '../../ui/Text';
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
    align-items: center;
    width: 100%;
    margin: 8px;
    z-index: -1;
`;

const TrackTitle = styled(H3)`
    margin-top: 4px;
    ${props => (props.currentTrack ? `color: ${colors.secondary70};` : '')}
`;

const TrackText = styled(View)`
    margin-left: 16px;
    flex: 1;
`;

const TrackSubText = styled(Text)`
    color: ${colors.neutral80};
    font-size: 12px;
`;

const hasFreeShow = any(show => !!show.free);

const Track = ({ performer, onPress, currentTrack, trackIndex }) => {
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
                <TrackText>
                    <TrackSubText numberOfLines={1}>{track.name}</TrackSubText>

                    <TrackTitle
                        currentTrack={track && track.id === currentTrack?.id}
                        numberOfLines={1}
                    >
                        {name}
                        <TrackSubText numberOfLines={1}>
                            {shows.length > 0
                                ? ` — ${shows[0].venue.name}`
                                : ''}
                        </TrackSubText>
                    </TrackTitle>
                </TrackText>
                <ShiftRight>
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
                                style={{ marginHorizontal: 8 }}
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
            </TrackContainer>
        </TouchableHighlight>
    );
};

export default Track;
