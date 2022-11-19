import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { View, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../ui/theme';
import { H2, Text } from '../../ui/Text';
import { getBannerPlaylist } from '../../api/playlists';
import ScrollBounceBackground from '../../ui/layout/ScrollBounceBackground';
import { parseAndFormatShortDate } from '../../utils/dates';
import PlaylistTracks from './PlaylistTracks';

const PlaylistContainer = styled(View)`
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    background-color: ${colors.neutral5};
`;

const PlaylistHeader = styled(LinearGradient)`
    border-bottom-color: ${colors.primary80};
    border-bottom-width: 1px;
    padding: 16px;
    margin-bottom: 8px;
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const PlaylistHeaderText = styled(H2)`
    margin-bottom: 8px;
`;

const PlaylistHeaderCard = styled(Image)`
    width: 140px;
    height: 140px;
    margin-right: 16px;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
`;

const addPerformerToTopTrack = performer => ({
    ...performer,
    top_track: {
        ...performer.top_track,
        artistInfo: performer,
    },
});

const BannerPlaylist = ({ route, navigation }) => {
    const [performers, setPerformers] = useState([]);
    const { id, title, background, start_date, end_date } = route.params;

    useEffect(() => {
        getBannerPlaylist(id).then(response =>
            setPerformers(response.artists.map(addPerformerToTopTrack))
        );
    }, [id]);

    useEffect(
        () =>
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: colors.primary40,
                    borderWidth: 0,
                },
            }),
        []
    );

    return (
        <PlaylistContainer>
            <ScrollView>
                <ScrollBounceBackground color={colors.primary40} />
                <PlaylistHeader colors={[colors.primary40, colors.neutral5]}>
                    <PlaylistHeaderCard source={{ uri: background }} />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <PlaylistHeaderText>{title}</PlaylistHeaderText>
                        {start_date && end_date && (
                            <Text>
                                {parseAndFormatShortDate(start_date)} -{' '}
                                {parseAndFormatShortDate(end_date)}
                            </Text>
                        )}
                    </View>
                </PlaylistHeader>
                <PlaylistTracks performers={performers} />
            </ScrollView>
        </PlaylistContainer>
    );
};

export default BannerPlaylist;
