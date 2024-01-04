
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode="modal"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen
                    name="ProductDetails"
                    sharedElements={(route) => {
                        return [`${route.params.item.id}`];
                    }}
                    component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}