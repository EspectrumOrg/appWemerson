import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CityEvents from './pages/CityEvents';
import Favorites from './pages/Favorites';
import History from './pages/History';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import SearchDestination from './pages/SearchDestination';
import Schedule from './pages/Schedule';
import MeetingPoint from './pages/MeetingPoint';
import Beneficiary from './pages/Beneficiary';
import Category from './pages/Category';
import SearchingDriver from './pages/SearchingDriver';
import Payment from './pages/Payment';
import RateDriver from './pages/RateDriver';

const screens = { Login, Register, Home, CityEvents, Favorites, History, Wallet, Profile, SearchDestination, Schedule, MeetingPoint, Beneficiary, Category, SearchingDriver, Payment, RateDriver };
export default function App() {
  const [screen, setScreen] = useState('Login');
  const Screen = screens[screen] || Login;
  return <SafeAreaView style={styles.app}><StatusBar barStyle="dark-content" /><View style={styles.shell}><Screen go={setScreen} /></View></SafeAreaView>;
}
const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#eaf0ed', alignItems: 'center' },
  shell: { flex: 1, width: '100%', maxWidth: 480, backgroundColor: '#f7f8f7' },
});
