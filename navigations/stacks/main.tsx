import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../../screens/Main/Home';
import routes from '../../utils/routes';

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MAIN.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
