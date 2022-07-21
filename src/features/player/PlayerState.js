import React, { useContext, useEffect, useState } from "react";
import TrackPlayer, {
  Capability,
  Event,
  State,
  useTrackPlayerEvents,
} from "react-native-track-player";

const notPlayingStatuses = [State.None, State.Paused, State.Stopped];

const PlayerContext = React.createContext({
  currentTrack: null,
  playing: false,
  play: () => {},
  togglePaused: () => {},
  updateQueue: () => {},
  skip: () => {},
  rewind: () => {},
});

const PlayerState = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState({});
  const [playing, setPlaying] = useState(false);

  const play = async () => {
    await TrackPlayer.play();
  };

  const togglePaused = async () => {
    const playerState = await TrackPlayer.getState();
    if (playerState === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const updateQueue = async (newQueue) => {
    await TrackPlayer.reset();
    await TrackPlayer.add(newQueue);
  };

  const skip = async () => await TrackPlayer.skipToNext();

  const rewind = async () => {
    const position = await TrackPlayer.getPosition();
    if (position < 4) {
      return await TrackPlayer.skipToPrevious();
    }
    return await TrackPlayer.seekTo(0);
  };

  const _setup = async () => {
    await TrackPlayer.updateOptions({
      stopWithApp: false, // false=> music continues in background even when app is closed
      // Media controls capabilities
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    await TrackPlayer.setupPlayer({});
  }

  useEffect(() => {
    _setup();
    return () => TrackPlayer.destroy();
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], async (event) => {
    if (event.type === Event.PlaybackState) {
      if (notPlayingStatuses.includes(event.state)) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }
  });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  });

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        playing,
        play,
        togglePaused,
        updateQueue,
        skip,
        rewind,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;

export const usePlayer = () => useContext(PlayerContext);
