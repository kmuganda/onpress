import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import One from '../pages/one';
import Two from '../pages/two';

export default class Router extends Component {
  render() {
    const Tab = TabNavigator({
      One: { screen: One },
      Two: { screen: Two },
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 10 }
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <Tab />
      </View>
    );
  }
}
