import React from 'react';
import { Linking } from 'react-native';
import { LargePlaylistLink } from './PlaylistLink';
import { getWindowWidth } from '../../utils/dimensions';
import { useBannerPlaylists } from '../playlists/BannerPlaylistProvider';
import { navigate } from '../../utils/navigation';
import PATHS from '../../contants/paths';
import { parseAndFormatShortDate } from '../../utils/dates';

const FestivalsTab = () => {
    const { banners } = useBannerPlaylists();

    return (
        <>
            {banners.map((playlist, idx) => (
                <LargePlaylistLink
                    style={{ width: getWindowWidth() - 24, marginBottom: 24 }}
                    key={idx}
                    onPress={() =>
                        playlist.web_link
                            ? Linking.openURL(playlist.web_link)
                            : navigate(PATHS.BANNER_PLAYLIST, playlist)
                    }
                    playlist={{
                        image: { uri: playlist.background },
                        displayName: playlist.title,
                        subHeader:
                            playlist.start_date &&
                            playlist.end_date &&
                            `${parseAndFormatShortDate(
                                playlist.start_date
                            )} - ${parseAndFormatShortDate(playlist.end_date)}`,
                    }}
                />
            ))}
        </>
    );
};

export default FestivalsTab;
