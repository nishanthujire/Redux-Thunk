import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
const Home = () => {

  const translationY = useRef(new Animated.Value(0)).current
  //timing animation
  const startTimeAnimation = () => {
    Animated.timing(translationY, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bounce, //animation type at the end
      useNativeDriver: true
    }).start()
  }

  //spring animation
  const startSpringAnimation = () => {
    Animated.spring(translationY, {
      toValue: 20, //it considers it orignal postion value
      useNativeDriver: true
    }).start()
  }


  //staggered animation(starts animations in order and in parallel, but with successive delays).
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    //stagger animation
    Animated.stagger(500, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      })
    ]).start();
  };
  const fadeOut = () => {
    //stagger animation
    Animated.stagger(500, [
      Animated.timing(thirdOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(firstOpacity, {
        toValue: 0,
        useNativeDriver: true,
      })
    ]).start();
  };

  //sequence animation (performing animations in sequence)
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const startSquenceAnimation = () => {
    Animated.sequence([
      Animated.timing(translation.x, {
        toValue: 100,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }
  //parallel animation
  const startParallelAnimation = () => {
    Animated.parallel([
      Animated.timing(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  //comibent naimed (sequence anc parallel)
  const startcombinedAnimation = () => { //sequnece combined under parallel animation
    Animated.sequence([
      Animated.timing(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ])

    ]).start();
  }

  //inter polation
  const interpolationX = useRef(new Animated.Value(0)).current;
  const interpolation = () => {
    Animated.timing(interpolationX, {
      toValue: 100,
      duration: 1000,
      delay: 100,
      useNativeDriver: false
    }).start()

  }
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* time and stping animation */}
        <Animated.View style={{ ...styles.subContainer, transform: [{ translateY: translationY }] }}>
        </Animated.View>
        <View style={{ ...styles.buttonRow, marginTop: 100 }}>
          <Button title="timing" onPress={startTimeAnimation} />
          <View style={{ marginVertical: 5 }} />
          <Button title="Spring" onPress={startSpringAnimation} />
        </View>
        {/* fad in & out staggered animation */}
        <Animated.View
          style={{ ...styles.subContainer, marginTop: 10, opacity: firstOpacity }}
        />
        <Animated.View
          style={{ ...styles.subContainer, marginTop: 10, opacity: secondOpacity }}
        />
        <Animated.View
          style={{ ...styles.subContainer, marginTop: 10, opacity: thirdOpacity }}
        />
        <View style={styles.buttonRow}>
          <Button title="Fade In" onPress={fadeIn} />
          <View style={{ marginVertical: 5 }} />
          <Button title="Fade Out" onPress={fadeOut} />
        </View>

        {/* sequence animation */}
        <Animated.View style={{ ...styles.subContainer, transform: [{ translateY: translation.y }, { translateX: translation.x }] }}>
        </Animated.View>
        <View style={{ ...styles.buttonRow, marginTop: 100 }}>

          <Button title="sequence" onPress={startSquenceAnimation} />
          <View style={{ marginVertical: 5 }} />
          <Button title="Parallel" onPress={startParallelAnimation} />
          <View style={{ marginVertical: 5 }} />
          <Button title="combiend" onPress={startcombinedAnimation} />
        </View>


        <View>

        </View>
        {/* Interpolation */}
        <Text style={styles.title}>Interpolation</Text>
        <Animated.View
          style={{
            ...styles.subContainer,
            backgroundColor: interpolationX.interpolate({
              inputRange: [0, 100],
              outputRange: ['tomato', 'gold'],

            }),
            marginBottom: 50,
            alignSelf: 'center',
            transform: [
              { translateX: interpolationX },
              {
                rotate: interpolationX.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '360deg']
                })

              }],
            opacity: interpolationX.interpolate({
              inputRange: [25, 75, 100],
              outputRange: [0, 1, 0],
              extrapolate: 'clamp'
            })


          }}

        />
        <View style={styles.buttonRow}>
          <Button title="InterPolation" onPress={interpolation} />
        </View>





      </ScrollView>
    </SafeAreaView>



  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  subContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    alignSelf: 'center'
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {

    marginVertical: 16,
    alignItems: 'center'

  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 20
  }
})
