import { compose, prop } from 'ramda';
import { usePlayer } from '../player/PlayerState';

const songToTrackObject = ({
    preview_url,
    name,
    artistInfo,
    album_art_url,
    id,
}) => ({
    id,
    url: preview_url,
    title: name,
    artist: artistInfo.name,
    artwork: album_art_url,
    artistInfo,
});

const usePlaylistActions = performers => {
    const { play, updateQueue } = usePlayer();

    const onSongPress = async index => {
        await updateQueue(
            performers
                .slice(index, performers.length)
                .filter(performer => !!performer.top_track?.preview_url)
                .map(compose(songToTrackObject, prop('top_track')))
        );
        await play();
    };

    const addPerformerToTopTrack = performer => ({
        ...performer,
        top_track: {
            ...performer.top_track,
            artistInfo: performer,
        },
    });

    return { onSongPress, addPerformerToTopTrack };
};

export default usePlaylistActions;
