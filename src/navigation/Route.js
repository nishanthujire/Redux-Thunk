
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnlineUser from '../screens/OnlineUser';
const Stack = createStackNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnlineUser" component={OnlineUser} />
              
            </Stack.Navigator>
        </NavigationContainer >
    );
}