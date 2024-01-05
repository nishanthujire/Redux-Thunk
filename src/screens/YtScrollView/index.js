import { Animated, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { FlatList } from 'react-native'

const HEADER_HEIGHT = 60
const YtScrollView = () => {


    const generateArray = () => {
        return Array.from({ length: 100 }, (_, index) => index);
    }
    const data = generateArray();




    //show header when user scrolls up (without using states) only using animated 
    //scrolling value
    const scrollY = useRef(new Animated.Value(0)).current

    const diffClamps = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)

    //translation y value
    const translateY = diffClamps.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
    })
    return (
        /* header */
        <SafeAreaView style={{ flex: 1 }}>
            <Animated.View
                style={styles.header(translateY)}
            >
                <Text style={styles.title}>Animated Header</Text>
            </Animated.View>
            <Animated.FlatList
                bounces={false}
                data={data}
                //scrolling animated event updates scrolling value when user starts scrolling
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }
                ], { useNativeDriver: true })}
                //contentContainerStyle={{ marginTop: 40 }}
                // onScroll={(e) => {  //this code aslo works
                //   scrolling.setValue(e.nativeEvent.contentOffset.y)
                // }}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.cardContainer}>
                        <Text >index {item + 1}</Text>
                    </View>
                )}
                keyExtractor={(index) => index.toString()}

            />

        </SafeAreaView>
    )
}

export default YtScrollView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,

    },
    header: (translateY) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        transform: [{ translateY: translateY }],
        backgroundColor: 'black',
        elevation: 4,
        zIndex: 100,


    }),
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        color: 'red'
    },
    cardContainer: {
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        elevation: 1
    },



})