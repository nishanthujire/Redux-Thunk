import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const YtScrollView = () => {
    const generateArray = () => {
        return Array.from({ length: 50 }, (_, index) => index);
    }
    const data = generateArray();


    //show header when user scrolls up (without using states) only using animated 
    //scrolling value
    const scrolling = useRef(new Animated.Value(0)).current

    //translation y value
    const translation = scrolling.interpolate({
        inputRange: [0, 40],
        outputRange: [-100, 0],
        extrapolate: 'clamp'
    })
    return (
        /* header */
        <>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 40,
                    transform: [{ translateY: translation }],
                    backgroundColor: 'tomato'
                }}
            />
            <Animated.ScrollView
                style={styles.container}
                //scrolling animated event updates scrolling value when user starts scrolling
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: scrolling
                            }
                        }
                    }
                ], { useNativeDriver: true })}
            >
                {
                    data.map((item) => (
                        <View style={styles.cardContainer}>
                            <Text >index {item + 1}</Text>
                        </View>
                    ))
                }



            </Animated.ScrollView>
        </>
    )
}

export default YtScrollView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    cardContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#fff',
        elevation: 1
    },



})