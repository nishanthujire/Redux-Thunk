import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import { SharedElement } from 'react-navigation-shared-element';

const Products = ({ navigation }) => {

    const [data, setData] = useState([]);
    const getProducts = async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            let res = await response.json()
            setData(res)
        }
        catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listContainer}
                activeOpacity={0.6}
                onPress={() => navigation.navigate('ProductDetails', { item: item })}
            >
                <SharedElement id={`${item.id}`}>
                    <Image style={{
                        ...styles.imageStyle,
                    }} source={{ uri: item?.image }}>

                    </Image>
                </SharedElement>
                <Text style={styles.title}>Price : ${item.price}</Text>

            </TouchableOpacity>)
    }

    return (
        <View style={styles.container}>
            < FlatList
                numColumns={2}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}

                contentContainerStyle={{ marginHorizontal: 30, }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}

            />
        </View>
    )
}

export default Products

