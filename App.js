import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import  { dogs } from './breeds';
import Item from './Item';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
          <FlatList 
            data={dogs}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item}/>
            }}
            keyExtractor={item =>item.breed}
          />
          <StatusBar style="auto" />
      </View>
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

  }
});

