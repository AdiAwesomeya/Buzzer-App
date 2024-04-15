import Buzzer from '../components/buzzer'
import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from '../components/appHeader'

export default class BuzzerScreen extends React.Component{
render(){
  return(
    <View style = {{flex: 1, backgroundColor: 'black'}}>
    <AppHeader/>
    <Buzzer color = {this.props.navigation.getParam('color')}/>
    </View>
  )
}
}