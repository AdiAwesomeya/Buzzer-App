import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Text
        style={{
          height: 50,
          textAlign: 'center',
          fontSize: 25,
          backgroundColor: 'blue',
          color: 'white',
          fontWeight: 'bold',
        }}>
        Quiz Buzzer App
      </Text>
    );
  }
}
