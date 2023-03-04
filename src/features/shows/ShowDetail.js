import React, { useState } from 'react';
import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { Display } from '../../ui/Text';
import { colors } from '../../ui/theme';
import { AlbumArtBackground } from '../playlists/AlbumArt';
import PaginatedCarousel from '../../ui/layout/PaginatedCarousel';
import ExpandedPlayer from '../player/ExpandedPlayer';
import ShowSlide from './ShowSlide';
import ShowMap from './ShowMap';
import ShowUpperActions from './ShowUpperActions';

const ShowDetailsContainer = styled(View)`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral5};
`;

const ShowDetails = ({ route, navigation }) => {
    const { name, shows, top_track, spotify_id } = route.params;
    const [currentShowIndex, setCurrentShowIndex] = useState(0);

    return (
        <ShowDetailsContainer>
            <ScrollView style={{ flex: 2, flexGrow: 1 }}>
                <ShowUpperActions
                    navigation={navigation}
                    spotifyId={spotify_id}
                    artistName={name}
                    show={shows[currentShowIndex]}
                />
                <AlbumArtBackground
                    url={top_track.album_art_url}
                ></AlbumArtBackground>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                    <Display style={{ marginBottom: 4 }}>{name}</Display>
                </View>
                {shows.length > 1 ? (
                    <PaginatedCarousel
                        data={shows}
                        onSnapToItem={setCurrentShowIndex}
                        renderItem={({ item }) => (
                            <ShowSlide
                                {...item}
                                mainPerformer={name}
                                spotifyLink={`https://open.spotify.com/artist/${spotify_id}`}
                            />
                        )}
                    />
                ) : (
                    <ShowSlide
                        {...shows[0]}
                        mainPerformer={name}
                        style={{ marginBottom: 32 }}
                    />
                )}
                <ShowMap venue={shows[currentShowIndex].venue} />
            </ScrollView>
            <ExpandedPlayer />
        </ShowDetailsContainer>
    );
};

export default ShowDetails;
