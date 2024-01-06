import {render} from '@testing-library/react-native';
import Greeting from '../src/screens/Greeting';
//descrilbe is used to group the test cases
//testing usign ReactNativeTestLibrary
describe('props test', () => {
  test('good morning test', () => {
    const {getByText} = render(<Greeting name="sam" time="morning" />);
    //getting "GM sam" text
    const text = getByText('GM sam');
    expect(text).toBeTruthy();
  });

  test('good afternoon test', () => {
    const {getByText} = render(<Greeting name="sam" time="afternoon" />);
    const text = getByText('GF sam');
    expect(text).toBeTruthy();
  });
});
