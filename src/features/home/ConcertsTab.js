import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';
import { listToPairs } from '../../utils/arrays';
import { playlists } from '../../contants/playlists';
import PlaylistLink, { LargePlaylistLink } from './PlaylistLink';
import { getWindowWidth } from '../../utils/dimensions';
import { colors } from '../../ui/theme';

const HorizontalLine = styled.View`
    height: 0;
    margin: 16px;
    width: ${getWindowWidth() - 24}px;
    border: 1px solid ${colors.neutral20};
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
`;

const ConcertsTab = () => {
    return (
        <>
            <ScrollView horizontal={true}>
                {listToPairs(playlists.days).map((playlistPair, idx) => (
                    <View key={idx}>
                        {playlistPair.map((playlist, idx) => (
                            <PlaylistLink
                                key={idx}
                                playlist={playlist}
                                style={
                                    idx === 0 &&
                                    playlistPair.length === 2 && {
                                        marginBottom: 12,
                                    }
                                }
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
            <HorizontalLine />
            <ScrollView horizontal={true}>
                {playlists.weeks.map((playlist, idx) => (
                    <LargePlaylistLink key={idx} playlist={playlist} />
                ))}
            </ScrollView>
            <HorizontalLine />
            <ScrollView horizontal={true}>
                {playlists.months.map((playlist, idx) => (
                    <LargePlaylistLink
                        style={{ width: 156 }}
                        key={idx}
                        playlist={playlist}
                    />
                ))}
            </ScrollView>
        </>
    );
};

export default ConcertsTab;
