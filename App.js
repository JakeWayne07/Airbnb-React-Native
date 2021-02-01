/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Accommodation from './src/components/Accommodation';
import feed from './src/assets/data/feed';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestScreen from './src/screens/Guests'
import Router from './src/navigation/Router'

const post1 = feed[0]

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
    </>
  );
};

export default App;
