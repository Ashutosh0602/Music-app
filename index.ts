/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './App';
import {expo as appName} from './app.json';
import {playbackService} from './musicPlayerService'

AppRegistry.registerComponent(appName.name, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);