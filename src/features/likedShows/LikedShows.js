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
import { isEmpty, map } from 'ramda';
import ToggleButton from '../../ui/actions/ToggleButton';

const tabs = ['upcoming', 'past'];

const LikedShows = ({ style }) => {
    const [performers, setPerformers] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const { likedShowIds } = useLikedShows();
    const { onSongPress, addPerformerToTopTrack } = usePlaylistActions(
        performers?.[tabs[activeTab]]
    );

    useEffect(() => {
        !isEmpty(likedShowIds) &&
            listLikedShows(Array.from(likedShowIds)).then(response => {
                console.log(response);
                setPerformers(
                    map(artists => artists.map(addPerformerToTopTrack))(
                        response
                    )
                );
            });
    }, []);

    return (
        <View style={style}>
            <ScrollView>
                <ScrollBounceBackground color={colors.neutral10} />
                <PlaylistHeader
                    displayName="Favorites"
                    onPlayButtonPress={() => onSongPress(0)}
                />
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 24,
                    }}
                >
                    <ToggleButton
                        options={['Upcoming', 'Past']}
                        onSelect={setActiveTab}
                        selectedIndex={activeTab}
                    />
                </View>
                <PlaylistTracks
                    performers={performers[tabs[activeTab]]}
                    onSongPress={onSongPress}
                />
            </ScrollView>
        </View>
    );
};

export default styled(LikedShows)`
    ${playlistStyle}
`;
