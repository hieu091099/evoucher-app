// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Login from './screens/Login/Login';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {primaryColor} from './ultils/color';
import {Provider} from 'react-redux';
import configStore from './redux/store';
const Stack = createNativeStackNavigator();
const store = configStore();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    accent: '#f1c40f',
  },
};
function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
