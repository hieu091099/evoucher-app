import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Menu from '../../screens/Main/Game/RockPaper/Menu';
import Options from '../../screens/Main/Game/RockPaper/Options';
import Play from '../../screens/Main/Game/RockPaper/Play';
import useDesign from '../../hooks/useDesign';
import {StatusBar} from 'react-native';
import {HeaderLeftPlay} from '../../components/Buttons/HeaderBack';
import {HeaderRight} from '../../components/Buttons/HeaderRight';

const Stack = createNativeStackNavigator();

const RockPaperStack = () => {
  const {color} = useDesign();
  const status = color === 'white' ? 'light-content' : 'dark-content';
  const screenOptionStyle: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerTintColor: color,
    headerShown: false,
  };

  return (
    <>
      <StatusBar barStyle={status} />
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{
            gestureEnabled: false,
            headerLeft: HeaderLeftPlay,
            headerShown: true,
            headerTitle: '',
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RockPaperStack;
