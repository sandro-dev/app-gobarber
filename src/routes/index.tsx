import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerStyle: {
      //   backgroundColor: '#74b9ff',
      // },
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignUp"
  >
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
