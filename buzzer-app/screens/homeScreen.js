import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from '../components/appHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      redStatus: true,
      blueStatus: true,
      greenStatus: true,
      yellowStatus: true,
    };
  }
  componentDidMount() {
    var teamRef = db.ref('teams');
    teamRef.on('value', (data) => {
      var teamDetails = data.val()
        this.setState({
          redStatus: teamDetails.red.isEnabled,
          blueStatus: teamDetails.blue.isEnabled,
          greenStatus: teamDetails.green.isEnabled,
          yellowStatus: teamDetails.yellow.isEnabled,
        })
    });
  }
  goToBuzzerScreen = (buzzerColor) => {
    this.props.navigation.navigate('Beryllium', { color: buzzerColor });
    var teamRef = db.ref('teams/' + buzzerColor);
    teamRef.update({
      isEnabled: false,
    });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <AppHeader />
        <TouchableOpacity
          disabled={!this.state.redStatus}
          style={[{ backgroundColor: 'red' }, styles.button]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!this.state.greenStatus}
          style={[{ backgroundColor: 'green' }, styles.button]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!this.state.blueStatus}
          style={[{ backgroundColor: 'blue' }, styles.button]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!this.state.yellowStatus}
          style={[{ backgroundColor: 'yellow' }, styles.button]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  button: {
    width: 250,
    height: 100,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 40,
  },
});
