import { Image, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'


const ProductItem = ({item, setProductDetailId}) => {
  return (
    
    <Pressable style={styles.card}>
        <Text style={styles.text}>
            {item.title}
        </Text>
        <Image 
            style={styles.image}
            resizeMode='cover'
            source={{ uri: item?.thumbnail || null }}
        />

    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },

    text: {
        fontSize: 25,
        fontFamily: 'Ubuntu',
        textTransform: 'capitalize',
        marginBottom: 5,
    },

    image: {
        width: '100%',
        height: 200,
    }
})