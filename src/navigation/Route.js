
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
import OnlineUser from '../screens/OnlineUser';
const Stack = createStackNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnlineUser" component={OnlineUser} />
                <Stack.Screen name="User" component={Users} />
                <Stack.Screen name="AddUser" component={AddUser} />
                <Stack.Screen name="UpdateUser" component={UpdateUser} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}