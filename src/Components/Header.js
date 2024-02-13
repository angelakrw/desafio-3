import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import { Entypo } from '@expo/vector-icons'

const Header = ({title = 'Hello!', setCategorySelected}) => {

  handleHomeButton = () => {
    setCategorySelected('')
  }

  
  return (
    <>
        <StatusBar backgroundColor={colors.green2}/>
        <View style={styles.container}>
          <Pressable onPress={handleHomeButton}>
            <Entypo style={styles.home} name='home' size={30} color="white"/>
          </Pressable>
          <View style={styles.containerText}>
            <Text style={styles.Text}>{title}</Text>
          </View>
        </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      backgroundColor: colors.green2,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row'
    },

    containerText: {
      position: 'absolute',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },

    Text: {
      fontSize: 30,
      fontFamily: 'Pacifico',
      textTransform: 'capitalize'
    },

    home: {
      marginLeft: 20
    }
})