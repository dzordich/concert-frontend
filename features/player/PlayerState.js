import React, { useContext } from "react";
import { Audio } from "expo-av";
import { isNotEmpty } from "../../utils/arrays";

const PlayerContext = React.createContext({
  track: null,
  sound: null,
  isPlaying: false,
  playTrack: () => {},
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

  playTrack = async (track) => {
    const currentSound = this.state.sound;
    currentSound && (await currentSound.unloadAsync());
    const { sound } = await Audio.Sound.createAsync(
      { uri: track.preview_url },
      {},
      this._onPlaybackStatusUpdate
    );
    await sound.playAsync();
    this.setState({ sound, track, isPlaying: true });
  };

  togglePaused = async () => {
    const { sound, isPlaying } = this.state;
    if (sound) {
      const shouldPlay = !isPlaying;
      await sound.setStatusAsync({ shouldPlay });
      this.setState({ isPlaying: shouldPlay });
    }
  };

  updateQueue = (newQueue) => this.setState({ queue: newQueue });

  _onPlaybackStatusUpdate = async ({ didJustFinish }) => {
    const { sound, queue } = this.state;
    if (didJustFinish) {
      if (isNotEmpty(queue)) {
        console.log("playing next song in queue");
        await this.playTrack(queue[0]);
        this.updateQueue(queue.slice(1, queue.length));
      } else {
        console.log("Unloading sound");
        await sound.unloadAsync();
        this.setState({
          // track: null,
          sound: null,
          isPlaying: false,
        });
      }
    }
  };

  componentDidMount = () => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  };

  render() {
    return (
      <PlayerContext.Provider
        value={{
          ...this.state,
          playTrack: this.playTrack,
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
