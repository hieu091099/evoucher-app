import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../../screens/Main/Home';
import FlappyBirdClone from '../../screens/Main/Game/FlappyBird';
import routes from '../../utils/routes';

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MAIN.HOME}
        component={Home}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={routes.MAIN.GAME.FLAPPY_BIRD}
        component={FlappyBirdClone}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
