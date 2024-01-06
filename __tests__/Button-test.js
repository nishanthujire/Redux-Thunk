import {render, fireEvent} from '@testing-library/react-native';
import MyButton from '../src/screens/Button';
//testing using ReactNativeTestLibrary
describe('my button', () => {
  //mocking button 1 onpress and checking onpress method is called or not
  test('button mocking press & checking function is called test case', () => {
    const mockOnPress = jest.fn();
    //rendering button
    const {getByTestId} = render(<MyButton onPress={mockOnPress} />);

    //getting button (ny test id)
    const btn = getByTestId('btn');

    //mocking press
    fireEvent.press(btn);

    //checking mockOnPress function called or not
    expect(mockOnPress).toHaveBeenCalled();
  });

  test('mocking button2 onpress', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(<MyButton onPress={mockOnPress} />);
    const btn2 = getByTestId('btn2');
    //mocking btn 2 press
    fireEvent.press(btn2);
  });
});
