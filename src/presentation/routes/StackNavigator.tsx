import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductScreens} from '../screens/products/ProductScreens';
import {ProductScreen} from '../screens/products/ProductScreen';
import {Settings} from '../screens/settings/Settings';

export type RootStackParams = {
  Home: undefined;
  Settings: undefined;
  Products: undefined;
  Product: {id: number; name: string; description: string; price: number};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Products" component={ProductScreens} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export {StackNavigator};
