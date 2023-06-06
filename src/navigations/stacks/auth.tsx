import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../../screens/Auth/Login';
import routes from '../../utils/routes';

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.AUTH.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
