import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProductItem from '../Components/ProductItem'
import allProducts from '../Data/products.json'
import Search from '../Components/Search'

const ItemListCategories = ({category, setCategorySelected}) => {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(product => product.category === category)
            const productsFiltered = products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
            setProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
            setProducts(productsFiltered)
        }
    }, [category, keyword])

    return (
        <>
            <Header 
                title={category || "Products"}
                setCategorySelected={setCategorySelected}      
            />
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})