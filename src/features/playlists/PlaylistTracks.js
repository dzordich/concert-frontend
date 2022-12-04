import React from 'react';
import Track from './Track';
import { usePlayer } from '../player/PlayerState';

const PlaylistTracks = ({ performers, onSongPress }) => {
    const { currentTrack } = usePlayer();

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
