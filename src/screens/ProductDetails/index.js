import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './style'
import { SharedElement } from 'react-navigation-shared-element';
const ProductDetails = ({ navigation, route }) => {
    const { item } = route.params;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            delay: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>

            <Animated.View
                style={{ opacity: opacity }}

            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.closeIcon}>{'X'}</Text>
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.detailsContainer}>
                <SharedElement id={`${item.id}`}>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.imageStyle}
                    />
                </SharedElement>
                <Animated.View style={{ ...styles.infoContainer, opacity: opacity }}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.price}>Price : ${item?.price}</Text>

                </Animated.View>

            </View>

            <Animated.View style={{ ...styles.descContainer, opacity: opacity }}>
                <Text style={{ ...styles.title, fontSize: 16 }}>Product Description</Text>
                <Text style={styles.descText}>{item?.description}</Text>
            </Animated.View>

        </View>
    )
}

export default ProductDetails

