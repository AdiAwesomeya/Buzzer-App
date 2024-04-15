import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';
import firebase from 'firebase'

export default class Buzzer extends React.Component {
  playSound = async () => {
        console.log("bababab")
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };
  isButtonPressed(buttonColor){
    console.log("hoopachipapachipoo")
    var time = firebase.database.ServerValue.TIMESTAMP;
    var team = db.ref('teams/' + buttonColor + '/');
    team.update({
      isButtonPressed: true,
      time: time,
    });
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttonColor = this.props.color;
          this.isButtonPressed(buttonColor);
          this.playSound();
        }}>
        <Text style={styles.textStyles}>da buzzer</Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  buttonStyle: {
    width: 250,
    height: 250,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 200,
  },
  textStyles: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
