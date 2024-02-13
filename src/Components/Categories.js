import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'

const Categories = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        renderItem={({item}) => <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
        />}
        data = {categories}
        keyExtractor={category => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})