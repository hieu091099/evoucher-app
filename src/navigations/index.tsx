import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '../context';

const Stack = createNativeStackNavigator();
import AuthStack from './stacks/auth';
import MainStack from './stacks/main';

import routes from '../utils/routes';

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={routes.MAIN_STACK} component={MainStack} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default AppNavigator;
