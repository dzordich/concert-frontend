import React, { useState } from 'react';
import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Display, H2 } from '../../ui/Text';
import { colors } from '../../ui/theme';
import { AlbumArtBackground } from '../playlists/AlbumArt';
import PaginatedCarousel from '../../ui/layout/PaginatedCarousel';
import ExpandedPlayer from '../player/ExpandedPlayer';
import ShowSlide from './ShowSlide';
import ShowMap from './ShowMap';
import ShowUpperActions from './ShowUpperActions';
import VenueIcon from '../../ui/icons/VenueIcon';

const ShowDetailsContainer = styled(View)`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral5};
`;

const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4px 16px;
`;

const VenueName = styled(H2)`
    font-weight: 400;
    margin-left: 8px;
    font-size: 16px;
    flex: 1;
    flex-wrap: wrap;
`;

const ShowDetails = ({ route, navigation }) => {
    const { name, shows, top_track, spotify_id } = route.params;
    const [currentShowIndex, setCurrentShowIndex] = useState(0);

    return (
        <ShowDetailsContainer>
            <ShowUpperActions
                navigation={navigation}
                spotifyId={spotify_id}
                artistName={name}
                show={shows[currentShowIndex]}
            />
            <ScrollView style={{ flex: 2, flexGrow: 1 }}>
                <AlbumArtBackground url={top_track.album_art_url}>
                    <Gradient
                        colors={[
                            colors.neutral5,
                            'transparent',
                            colors.neutral5,
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 4,
                            }}
                        >
                            <VenueIcon />
                            <VenueName>
                                {shows[currentShowIndex].venue.name}
                            </VenueName>
                            {/*  festival marker used to be here */}
                        </View>
                        <Display>{name}</Display>
                    </Gradient>
                </AlbumArtBackground>
                {shows.length > 1 ? (
                    <PaginatedCarousel
                        data={shows}
                        onSnapToItem={setCurrentShowIndex}
                        paginationStyle={{ bottom: -36 }}
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
