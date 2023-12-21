import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import Home from '../screens/Home';
import { AppState, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import { ThemeContext } from '../context/ThemeContext';
const Stack = createStackNavigator();
export default function Routes() {
    //to suppoer only live dark/ligght theme (not theme change functionlaity inside app) - brst implementation
    const appTheme = useColorScheme();

   // app theme (to support theme change functionality inside app)
    //const { appTheme } = useContext(ThemeContext); (performance issue)
    //console.log("app theme is", appTheme);




    return (
        <NavigationContainer
            theme={appTheme == 'dark' ? Colors.dark : Colors.light} //setting themes of application
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}