
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import YtScrollView from '../screens/YtScrollView';
const Stack = createSharedElementStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode="modal"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Products" component={YtScrollView} />
               

            </Stack.Navigator>
        </NavigationContainer >
    );
}