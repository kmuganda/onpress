import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Two extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="go to one"
          onPress={() => navigate('One')}
        />
        <TouchableOpacity onPress={() => navigate('One')}>
          <Image
            source={require('../assets/LOL-Original-flat.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
  width: 170,
  height: 40
  }
});
