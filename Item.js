import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feature from './Feature'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key != 'breed')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{index}: {breed}</Text>
      { /* {keys.map(key => <Text>{key} {data[key]}</Text>)} */ }
      {keys.map(key => <Feature name={key} value={data[key]}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
  },
  label:{
    fontSize: 28
  }
})
export default Item