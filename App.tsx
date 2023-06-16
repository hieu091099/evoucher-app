// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import colors from './src/utils/color';
import {store, persistor} from './src/redux/store';
import AppNavigator from './src/navigations/index';
import Loading from './src/components/Loading';
import {navigationRef} from './src/navigations/services';
import withAuth from './src/middlewares/withAuth';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.blueA400,
    accent: '#f1c40f',
  },
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
              <AppNavigatorWithAuth />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
const AppNavigatorWithAuth: any = withAuth(AppNavigator);
export default App;
