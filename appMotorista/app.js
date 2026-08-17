import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';
import NewRequest from './pages/NewRequest';
import RideDetails from './pages/RideDetails';
import RideAccepted from './pages/RideAccepted';
import StartRide from './pages/StartRide';
import Trip from './pages/Trip';
import FinishRide from './pages/FinishRide';
import RatePassenger from './pages/RatePassenger';
import RideComplete from './pages/RideComplete';
import Earnings from './pages/Earnings';
import History from './pages/History';
import Schedule from './pages/Schedule';
import Performance from './pages/Performance';
import Profile from './pages/Profile';
import SideMenu from './pages/SideMenu';

const screens = {
  Login, Home, NewRequest, RideDetails, RideAccepted, StartRide, Trip, FinishRide,
  RatePassenger, RideComplete, Earnings, History, Schedule, Performance, Profile, SideMenu,
};

export default function App() {
  const [screen, setScreen] = useState('Login');
  const Screen = screens[screen] || Login;
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={screen === 'RideAccepted' ? 'light-content' : 'dark-content'} />
      <View style={styles.shell}><Screen go={setScreen} /></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#eaf0ed', alignItems: 'center' },
  shell: { flex: 1, width: '100%', maxWidth: 480, backgroundColor: '#f7f8f7' },
});
