import React, {useContext, useEffect, useState} from "react";
import TrackPlayer, {Event, State, useTrackPlayerEvents} from "react-native-track-player";

const notPlayingStatuses = [State.None, State.Paused, State.Stopped]

const PlayerContext = React.createContext({
  currentTrack: null,
  playing: false,
  play: () => {},
  togglePaused: () => {},
  updateQueue: () => {},
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

  useEffect(async () => {
    await TrackPlayer.setupPlayer({});
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], async event => {
    if (event.type === Event.PlaybackState) {
    if (notPlayingStatuses.includes(event.state)) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
    }
  })

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      console.log("track changed")
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  })

    return (
      <PlayerContext.Provider
        value={{
          currentTrack,
          playing,
          play,
          togglePaused,
          updateQueue,
        }}
      >
        {children}
      </PlayerContext.Provider>
    );

}

export default PlayerState;

export const usePlayer = () => useContext(PlayerContext);
