import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

import { setupPlayer, addTrack } from "./musicPlayerService";
import MusicPlayer from "./src/screens/MusicPlayer";

export default function App() {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar barstyle={"light-content"} /> */}
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
