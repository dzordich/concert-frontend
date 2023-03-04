import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, Pressable, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PaginatedCarousel from '../../ui/layout/PaginatedCarousel';
import { Display, Text } from '../../ui/Text';
import { getWindowWidth } from '../../utils/dimensions';
import { colors } from '../../ui/theme';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CircleHeart from '../../ui/icons/CircleHeart';
import { useBannerPlaylists } from '../playlists/BannerPlaylistProvider';

const Container = styled.View``;

const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const BannerPlaylist = styled(({ style, playlist }) => (
    <Pressable
        onPress={() =>
            playlist.onPress
                ? playlist.onPress()
                : Linking.openURL(playlist.webLink)
        }
    >
        <ImageBackground style={style} source={playlist.image}>
            <Gradient
                colors={[colors.neutralOpaque5, 'transparent', colors.neutral5]}
            >
                <Display style={{ marginBottom: 8 }}>
                    {playlist.title.toUpperCase()}
                </Display>
                <Text>{playlist.subHeader.toUpperCase()}</Text>
            </Gradient>
        </ImageBackground>
    </Pressable>
))`
    height: ${getWindowWidth() * 0.85}px;
    border-radius: 4px;
    overflow: hidden;
`;

const BannerPlaylists = () => {
    const { top } = useSafeAreaInsets();
    const { banners } = useBannerPlaylists();

    const BANNERS = useMemo(
        () => [
            {
                image: {
                    uri: 'https://concertfindermedia.s3.amazonaws.com/concert-backend/bannerBackgrounds/sxsw-banner-1.png',
                },
                title: 'SXSW',
                subHeader: 'Hip-Hop Lineup',
                onPress: () =>
                    navigate(
                        PATHS.BANNER_PLAYLIST,
                        banners.find(banner => banner.id === 22)
                    ),
            },
            {
                image: {
                    uri: 'https://concertfindermedia.s3.amazonaws.com/concert-backend/bannerBackgrounds/arctic-monkeys-singer.png',
                },
                title: 'Arctic Monkeys',
                subHeader: 'North American Tour',
                webLink: 'https://arcticmonkeys.com/live',
            },
        ],
        [banners]
    );
    return (
        <Container>
            <PaginatedCarousel
                data={BANNERS}
                paginationStyle={{
                    zIndex: 10,
                    position: 'absolute',
                    bottom: 36,
                    left: 0,
                    right: 0,
                    width: '100%',
                    justifyContent: 'center',
                }}
                renderItem={({ item }) => <BannerPlaylist playlist={item} />}
            />
            <Pressable
                style={{
                    position: 'absolute',
                    top: 12 + top,
                    right: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={() => navigate(PATHS.LIKED_SHOWS)}
            >
                <CircleHeart />
                <Text
                    style={{
                        fontSize: 12,
                        marginTop: 4,
                    }}
                >
                    Favorites
                </Text>
            </Pressable>
        </Container>
    );
};

export default BannerPlaylists;
