import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import HomeScreen from './screens/homeScreen';
import BuzzerScreen from './screens/buzzerScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex: 1}}>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  Hoopachipapachipoo: HomeScreen,
  Beryllium: BuzzerScreen,
});

var AppContainer = createAppContainer(AppNavigator); 
