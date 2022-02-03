import React, { useContext } from "react";
import { Audio } from "expo-av";
import TrackPlayer, { State as PlayerStates } from "react-native-track-player";
import { isNotEmpty } from "../../utils/arrays";
import Track from "../playlists/Track";

const PlayerContext = React.createContext({
  track: null,
  sound: null,
  isPlaying: false,
  play: () => {},
  togglePaused: () => {},
  updateQueue: () => {},
});

class PlayerState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null,
      sound: null,
      isPlaying: false,
      queue: [],
    };
  }

  play = async () => {
    await TrackPlayer.play();
  };

  togglePaused = async () => {
    const playerState = await TrackPlayer.getState();
    if (playerState === PlayerStates.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  updateQueue = async (newQueue) => {
    await TrackPlayer.reset();
    await TrackPlayer.add(newQueue);
  };

  componentDidMount = async () => {
    await TrackPlayer.setupPlayer({});
  };

  render() {
    return (
      <PlayerContext.Provider
        value={{
          ...this.state,
          play: this.play,
          togglePaused: this.togglePaused,
          updateQueue: this.updateQueue,
        }}
      >
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export default PlayerState;

export const usePlayer = () => useContext(PlayerContext);
