import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import History from './components/history'

export default class App extends React.Component {
  scan = () => {};

  render() {
    return (
      <View style={ styles.container }>
        <History />
        <Button
          style={ styles.button }
          title={ "SCAN" }
          onPress={ this.scan } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
