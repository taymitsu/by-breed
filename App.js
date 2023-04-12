import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, TextInput } from 'react-native';
import  { dogs } from './breeds';
import Item from './Item';

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.listContainer}>
        <FlatList 
          data={dogs.filter(item => item.breed.includes(search))}
          renderItem={({ item, index }) => {
            return <Item index={index} data={item}/>
          }}
          keyExtractor={item =>item.breed}
        />
      </View>
      <TextInput 
        style={styles.search}
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    borderWidth: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 42,
    color: 'lavender',
    fontWeight: 'bold'
  },

  FlatList: {

  },
  search: {

  }
});

