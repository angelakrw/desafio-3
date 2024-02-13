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
        borderColor: colors.green2,
        backgroundColor: colors.green1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10
    },

    text: {
        fontSize: 25,
        marginLeft: 10,
        fontFamily: 'Ubuntu',
        marginBottom: 5,
        fontWeight: 'bold'
    },

    image: {
        width: '100%',
        height: 200,
    }
})