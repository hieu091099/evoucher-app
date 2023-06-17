import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../../screens/Auth/Login';
import routes from '../../utils/routes';
import Register from '../../screens/Auth/Register';

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.AUTH.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.AUTH.SIGN_UP}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
