import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';
import {CALLBACK_TYPE} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
//testing using Jest library
test('home render test', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
