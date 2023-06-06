// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {primaryColor} from './utils/color';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import AppNavigator from './navigations';
import Loading from './components/Loading';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigations/services';
import withAuth from './middlewares/withAuth';

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
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <AppNavigatorWithAuth />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
const AppNavigatorWithAuth: any = withAuth(AppNavigator);
export default App;
