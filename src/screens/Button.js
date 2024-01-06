import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyButton = ({onPress}) => {
  return (
    <View>
      <Button title="click me" testID="btn" onPress={onPress} color={'red'} />
      <Button
        title="click me"
        testID="btn2"
        onPress={() => console.log('button 2 clicked')}
        color={'red'}
      />
    </View>
  );
};

export default MyButton;
