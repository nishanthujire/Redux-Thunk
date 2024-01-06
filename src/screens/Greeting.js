import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Greeting = ({time, name}) => {
  const greetingMsg = time => {
    switch (time) {
      case "morning": {
        return 'GM';
      }
      case "afternoon": {
        return 'GF';
      }
      case "night": {
        return 'GN';
      }
    }
  };
  return (
    <Text>
      {greetingMsg(time)} {name}
    </Text>
  );
};

export default Greeting;

const styles = StyleSheet.create({});
