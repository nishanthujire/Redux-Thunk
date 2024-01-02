import React, { useEffect, useRef, useState, } from 'react';
import { Animated, Button, Text, View, } from 'react-native';



const Message = ({ message, onHide }) => {
    //animataed view opacity
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            //fade in
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(2000), //2 sec delay
            //fade out
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            onHide(); //callback function runs after the animation
        });
    }, []);

    return (
        <Animated.View
            style={{
                opacity: opacity,
                transform: [
                    {
                        translateY: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                        }),
                    },
                ],
                margin: 10,
                marginBottom: 5,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 4,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 3,
            }}
        >
            <Text>{message}</Text>
        </Animated.View>
    );
};

export default AnimatedToast = () => {

    const getRandomMessage = () => {
        const number = Math.trunc(Math.random() * 10000);
        return 'Random message ' + number;
    };
    const [messages, setMessages] = useState([]);

    return (
        <>
            <View
                style={{
                    position: 'absolute',
                    bottom: 45,
                    left: 0,
                    right: 0,
                }}
            >
                {messages.map((message) => (
                    <Message
                        key={message}
                        message={message}
                        onHide={() => {
                            //removing current message from the list after the animation
                            setMessages((messages) =>
                                messages.filter(
                                    (currentMessage) =>
                                        currentMessage !== message
                                )
                            );
                        }}
                    />
                ))}
            </View>

            <Button
                title="Add message"
                onPress={() => {
                    const message = getRandomMessage();
                    setMessages([...messages, message]);
                }}
            />
        </>
    );
};