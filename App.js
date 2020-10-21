import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

import RootScreen from './screens/RootScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {

  render() {
    return (
        <AppNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  RootScreen: RootScreen,
  HomeScreen: HomeScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({

});