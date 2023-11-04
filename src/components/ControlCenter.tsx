import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";
import { playbackService } from "../../musicPlayerService";

export default function ControlCenter() {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null)
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <AntDesign
          name="stepforward"
          size={40}
          color="black"
          style={styles.icon}
        />
        {/* <Icon style={styles.icon} name="skip-previous" size={40} /> */}
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <AntDesign
          name={playBackState === State.Playing ? "pause" : "play"}
          size={75}
          color="black"
        />
        {/* <Icon 
            style={styles.icon} 
            name={playBackState === State.Playing ? "pause" : "play-arrow"} 
            size={75} /> */}
      </Pressable>
      <Pressable onPress={skipToNext}>
        <MaterialIcons name="skip-next" size={40} color="black" />
        {/* <Icon style={styles.icon} name="skip-next" size={40} /> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#FFFFFF",
  },
  playButton: {
    marginHorizontal: 24,
  },
});
