import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, ScrollView } from 'react-native';
import { useCities } from '../cities/CityProvider';
import { listShows } from '../../api/shows';
import { colors } from '../../ui/theme';
import ScrollBounceBackground from '../../ui/layout/ScrollBounceBackground';
import PlaylistTracks from './PlaylistTracks';
import { playlistStyle } from './playlistStyle';
import PlaylistHeader from './PlaylistHeader';
import usePlaylistActions from './usePlaylistActions';

const Playlist = ({ route, style }) => {
    const [performers, setPerformers] = useState([]);
    const { selectedCity } = useCities();
    const { displayName, subHeader, startDate, endDate, limit } = route.params;
    const { onSongPress, addPerformerToTopTrack } =
        usePlaylistActions(performers);

    useEffect(() => {
        listShows({ city: selectedCity, startDate, endDate, limit })
            .then(response =>
                setPerformers(response.map(addPerformerToTopTrack))
            )
            .catch(response => {
                console.log(response.toJSON());
            });
    }, [selectedCity, startDate, endDate]);

    return (
        <View style={style}>
            <ScrollView>
                <ScrollBounceBackground color={colors.neutral10} />
                <PlaylistHeader
                    displayName={displayName}
                    subHeader={subHeader}
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

export default styled(Playlist)`
    ${playlistStyle}
`;
