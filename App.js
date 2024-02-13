import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import { useState } from 'react';
import ItemListCategories from './src/Screens/ItemListCategories';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')  
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      {
        categorySelected ?
        <ItemListCategories
          category={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        :
        <Home setCategorySelected={setCategorySelected}/>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
