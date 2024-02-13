import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({setCategorySelected}) => {
  return (
    <>
        <Header 
          title='Categories'
          setCategorySelected={setCategorySelected}  
        />
        <Categories setCategorySelected={setCategorySelected}/>
    </>
    )
}

export default Home

const styles = StyleSheet.create({})