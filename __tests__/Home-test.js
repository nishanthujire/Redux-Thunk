import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';

//testing using Jest library
test('home render test', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
