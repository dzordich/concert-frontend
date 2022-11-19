import React from 'react';
import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Display } from '../../ui/Text';
import { colors } from '../../ui/theme';
import { AlbumArtBackground } from '../playlists/AlbumArt';
import PaginatedCarousel from '../../ui/layout/PaginatedCarousel';
import { DownButton } from '../../ui/actions/BackButton';
import ExpandedPlayer from '../player/ExpandedPlayer';
import ShowSlide from './ShowSlide';

const ShowDetailsContainer = styled(View)`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral5};
`;

const ShowHeader = styled(View)``;

const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
`;

const ShowDetails = ({ route, navigation }) => {
    const { name, shows, top_track, spotify_id } = route.params;

    return (
        <ShowDetailsContainer>
            <DownButton navigation={navigation} />
            <ScrollView style={{ flex: 2, flexGrow: 1 }}>
                <ShowHeader>
                    <AlbumArtBackground url={top_track.album_art_url}>
                        <Gradient
                            colors={[
                                colors.neutral5,
                                'transparent',
                                colors.neutral5,
                            ]}
                        >
                            <Display>{name}</Display>
                        </Gradient>
                    </AlbumArtBackground>
                </ShowHeader>
                {shows.length > 1 ? (
                    <PaginatedCarousel
                        data={shows}
                        renderItem={({ item }) => (
                            <ShowSlide
                                {...item}
                                mainPerformer={name}
                                spotifyLink={`https://open.spotify.com/artist/${spotify_id}`}
                            />
                        )}
                    />
                ) : (
                    <ShowSlide {...shows[0]} mainPerformer={name} />
                )}
            </ScrollView>
            <ExpandedPlayer />
        </ShowDetailsContainer>
    );
};

export default ShowDetails;
