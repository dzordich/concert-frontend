import React, { useState, useContext, useEffect } from "react";
import { Audio } from "expo-av";

const PlayerContext = React.createContext({
  track: null,
  sound: null,
  isPlaying: false,
  playTrack: () => {},
  togglePaused: () => {},
});

class PlayerState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null,
      sound: null,
      isPlaying: false,
    };
  }

  playTrack = async (track) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: track.preview_url },
      {},
      this._onPlaybackStatusUpdate
    );
    await sound.playAsync();
    this.setState({ sound, track, isPlaying: true });
  };

  togglePaused = () => {
    const { sound, isPlaying } = this.state;
    if (sound) {
      const shouldPlay = !isPlaying;
      sound.setStatusAsync({ shouldPlay });
      this.setState({ isPlaying: shouldPlay });
    }
  };

  _onPlaybackStatusUpdate = async ({ didJustFinish }) => {
    const { sound } = this.state;
    if (didJustFinish) {
      console.log("Unloading sound");
      await sound.unloadAsync();
      this.setState({
        // track: null,
        sound: null,
        isPlaying: false,
      });
    }
  };

  componentDidMount = () => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  };

  render() {
    return (
      <PlayerContext.Provider
        value={{
          ...this.state,
          playTrack: this.playTrack,
          togglePaused: this.togglePaused,
        }}
      >
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export default PlayerState;

export const usePlayer = () => useContext(PlayerContext);
