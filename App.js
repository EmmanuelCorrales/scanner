import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import History from './components/history'
import Scanner from './components/scanner'

export default class App extends React.Component {
  state = {
    scanning: false
  }
  scan = () => {
    this.setState({ scanning: true });
  };

  render() {
    return (
      this.state.scanning ?
        <Scanner /> :
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
