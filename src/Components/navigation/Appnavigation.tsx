import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../Screens/SplashScreen';
import HomeScreen from '../../Screens/HomeScreen';
import product1 from "../../Screens/product1";
import product2 from '../../Screens/product2';
import product3 from '../../Screens/product3';
import product4 from '../../Screens/product4';
import product5 from '../../Screens/product5';
import product6 from '../../Screens/product6';
import PaymentScreen from '../../Screens/Payment';
import Success from '../../Screens/SuccessScreen';
import Customburger from '../../Screens/Customburger';
import User from '../../Screens/UserScreen';
import EditProfile from '../../Screens/EditProfile';
import PaymentDetails from '../../Screens/PaymentDetails';
import OrderHistory from '../../Screens/Orderhistory';
import ChatScreen from '../../Screens/ChatScreen';
import FilterScreen from '../../Screens/FilterScreen';
import FavoriteScreen from '../../Screens/Favorite';
import Failure from '../../Screens/FailureScreen';
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  product1:undefined
  product2:undefined
  product3:undefined
  product4:undefined
  product5:undefined
  product6:undefined
  Payment:undefined
  Success:undefined
  Failure:undefined
  customburger:undefined
  UserScreen:undefined
  EditProfile:undefined
  PaymentDetails:undefined
  OrderHistory:undefined
  ChatScreen:undefined
  Filter:undefined
  Favorite:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen 
        name="product1"
        component={product1} />
        <Stack.Screen 
        name="product2"
        component={product2} />
         <Stack.Screen 
        name="product3"
        component={product3} />
        <Stack.Screen 
        name="product4"
        component={product4} />
        <Stack.Screen 
        name="product5"
        component={product5} />
        <Stack.Screen 
        name="product6"
        component={product6} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
         name="Payment" 
        component={PaymentScreen} />
        <Stack.Screen
         name="Success" 
        component={Success} />
        <Stack.Screen
          name="customburger"
          component={Customburger}
        />
        <Stack.Screen
          name="UserScreen"
          component={User}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetails}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
        />
        <Stack.Screen
       name="Filter"
       component={FilterScreen}
/>
        <Stack.Screen
          name="Failure"
          component={Failure}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}