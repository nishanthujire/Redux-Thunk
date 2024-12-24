
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
const Stack = createStackNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="User" component={Users} />
                <Stack.Screen name="AddUser" component={AddUser} />
                <Stack.Screen name="UpdateUser" component={UpdateUser} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}