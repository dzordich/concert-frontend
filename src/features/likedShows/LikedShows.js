import React, { useEffect, useState } from 'react';
import usePlaylistActions from '../playlists/usePlaylistActions';
import { ScrollView, View } from 'react-native';
import ScrollBounceBackground from '../../ui/layout/ScrollBounceBackground';
import { colors } from '../../ui/theme';
import PlaylistHeader from '../playlists/PlaylistHeader';
import PlaylistTracks from '../playlists/PlaylistTracks';
import styled from 'styled-components/native';
import { playlistStyle } from '../playlists/playlistStyle';
import { listLikedShows } from '../../api/shows';
import { useLikedShows } from '../../utils/hooks/LikedShowsState';
import { isEmpty } from 'ramda';

const LikedShows = ({ style }) => {
    const [performers, setPerformers] = useState([]);
    const { likedShowIds } = useLikedShows();
    const { onSongPress, addPerformerToTopTrack } =
        usePlaylistActions(performers);

    useEffect(() => {
        !isEmpty(likedShowIds) &&
            listLikedShows(Array.from(likedShowIds)).then(response => {
                setPerformers(response.map(addPerformerToTopTrack));
            });
    }, []);

    return (
        <View style={style}>
            <ScrollView>
                <ScrollBounceBackground color={colors.neutral10} />
                <PlaylistHeader
                    displayName="Liked Shows"
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

export default styled(LikedShows)`
    ${playlistStyle}
`;
