import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class History extends React.Component {

  renderItem = ({ item }) => {
    return <Text style={ styles.item } >{ item.key }</Text>;
  };

  render() {
    return (
      <View style={ styles.container }>
        <FlatList data={ data } renderItem={ this.renderItem } />
      </View>
    );
  }
}

const data = [
  { key: 'Apple' },
  { key: 'Banana' },
  { key: 'Cherry' },
  { key: 'Orange' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    backgroundColor: 'steelblue',
    padding: 10,
    margin: 10,
    fontSize: 18,
    height: 44
  }
});
