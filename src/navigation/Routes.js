import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import YtScrollView from '../screens/YtScrollView';
import FlashListDemo from '../screens/FlashList';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name={'Home'} component={Home} /> */}
                {/* <Stack.Screen name={'YtScrollView'} component={YtScrollView} /> */}
                <Stack.Screen name={'FlashListDemo'} component={FlashListDemo} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}