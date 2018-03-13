import React, { Component } from 'react';
import { View } from 'react-native';
import Router from './components/router';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    );
  }
}
