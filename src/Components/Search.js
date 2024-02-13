import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from '@expo/vector-icons'

const Search = ({ onSearch }) => {
    
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    
    const search = () => {
      const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
      if (expression.test(input)) {
        setError("Caracteres no válidos")
      } else {
        setError("")
        onSearch(input)
      }
    }

    const removeInput = () => {
        setInput("")
        setError("")
        onSearch("")
    }

    return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={search}
          placeholder='Search product...'
          placeholderTextColor={colors.lightGray}
        />

        <Pressable onPress={search}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>

        <Pressable onPress={removeInput}>
          <Entypo name='circle-with-cross' size={25} color='black' />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text>: null}
    </>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        paddingTop: 10,
        marginBottom: 10
    },
    
    input: {
        color: 'white',
        backgroundColor: colors.green3,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.lightGray,
        width: '80%',
        fontSize: 20
    },

    errorText: {
      color: 'red',
      marginBottom: 4,
      fontWeight: 'bold'
    }
})