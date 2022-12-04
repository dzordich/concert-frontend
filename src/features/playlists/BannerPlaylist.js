import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, ScrollView } from 'react-native';
import { colors } from '../../ui/theme';
import { getBannerPlaylist } from '../../api/playlists';
import ScrollBounceBackground from '../../ui/layout/ScrollBounceBackground';
import { parseAndFormatShortDate } from '../../utils/dates';
import PlaylistTracks from './PlaylistTracks';
import { playlistStyle } from './playlistStyle';
import PlaylistHeader from './PlaylistHeader';
import usePlaylistActions from './usePlaylistActions';

const BannerPlaylist = ({ route, style }) => {
    const [performers, setPerformers] = useState([]);
    const { onSongPress, addPerformerToTopTrack } =
        usePlaylistActions(performers);
    const { id, title, start_date, end_date } = route.params;

    useEffect(() => {
        getBannerPlaylist(id).then(response =>
            setPerformers(response.artists.map(addPerformerToTopTrack))
        );
    }, [id]);

    return (
        <View style={style}>
            <ScrollView>
                <ScrollBounceBackground color={colors.neutral10} />
                <PlaylistHeader
                    displayName={title}
                    subHeader={`${parseAndFormatShortDate(
                        start_date
                    )} - ${parseAndFormatShortDate(end_date)}`}
                    onPlayButtonPress={() => onSongPress(0)}
                />
                <PlaylistTracks
                    performers={performers}
                    onSongPress={onSongPress}
                />
            </ScrollView>
        </View>
    );
};

export default styled(BannerPlaylist)`
    ${playlistStyle}
`;
