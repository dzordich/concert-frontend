import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCities } from '../cities/CityProvider';
import { listShows } from '../../api/shows';
import { colors } from '../../ui/theme';
import { H2, Text } from '../../ui/Text';
import { PlaylistCard } from '../home/PlaylistLink';
import ScrollBounceBackground from '../../ui/layout/ScrollBounceBackground';
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

const PlaylistHeaderCard = styled(PlaylistCard)`
    width: 140px;
    height: 140px;
    margin-right: 16px;
    padding: 8px;
`;

const addPerformerToTopTrack = performer => ({
    ...performer,
    top_track: {
        ...performer.top_track,
        artistInfo: performer,
    },
});

const formatDescription = (description, city) =>
    `Discover ${description.quantifier} artists playing in ${city} ${description.timeframe}.`;

const Playlist = ({ route, navigation }) => {
    const [performers, setPerformers] = useState([]);
    const { selectedCity } = useCities();
    const {
        displayName,
        startDate,
        endDate,
        backgroundColor,
        limit,
        description,
    } = route.params;

    useEffect(() => {
        listShows({ city: selectedCity, startDate, endDate, limit })
            .then(response =>
                setPerformers(response.map(addPerformerToTopTrack))
            )
            .catch(response => {
                console.log(response.toJSON());
            });
    }, [selectedCity, startDate, endDate]);

    useEffect(
        () =>
            navigation.setOptions({
                headerStyle: { backgroundColor, borderWidth: 0 },
            }),
        []
    );

    return (
        <PlaylistContainer>
            <ScrollView>
                <ScrollBounceBackground color={backgroundColor} />
                <PlaylistHeader colors={[backgroundColor, colors.neutral5]}>
                    <PlaylistHeaderCard {...route.params} />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            paddingHorizontal: 20,
                        }}
                    >
                        {description && (
                            <Text
                                style={{
                                    paddingBottom: 8,
                                    color: colors.neutral90,
                                }}
                            >
                                {formatDescription(
                                    description,
                                    selectedCity.name
                                )}
                            </Text>
                        )}
                    </View>
                </PlaylistHeader>
                <PlaylistTracks performers={performers} />
            </ScrollView>
        </PlaylistContainer>
    );
};

export default Playlist;
