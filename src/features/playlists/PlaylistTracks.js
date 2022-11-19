import React from 'react';
import { compose, prop } from 'ramda';
import Track from './Track';
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

const PlaylistTracks = ({ performers }) => {
    const { play, updateQueue, currentTrack } = usePlayer();

    const onSongPress = async (song, index) => {
        if (song.preview_url) {
            await updateQueue(
                performers
                    .slice(index, performers.length)
                    .filter(performer => !!performer.top_track?.preview_url)
                    .map(compose(songToTrackObject, prop('top_track')))
            );
            await play();
        }
    };

    if (!performers) {
        return null;
    }
    return (
        <>
            {performers.map(
                (performer, idx) =>
                    performer.top_track && (
                        <Track
                            performer={performer}
                            onPress={onSongPress}
                            trackIndex={idx}
                            currentTrack={currentTrack}
                            key={idx}
                        />
                    )
            )}
        </>
    );
};

export default PlaylistTracks;
