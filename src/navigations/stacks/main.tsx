import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';

import routes from '../../utils/routes';
import {logout} from '../../redux/actions/authAction';
import Home from '../../screens/Main/Home';
import FlappyBird from '../../screens/Main/Game/FlappyBird/FlappyBird';
import ToeTic from '../../screens/Main/Game/ToeTic/Game';
import Voucher from '../../screens/Main/Voucher';
import Location from '../../screens/Main/Location';
import Profile from '../../screens/Main/Profile';
import Menu from '../../screens/Main/Game/RockPaper/Menu';
import Options from '../../screens/Main/Game/RockPaper/Options';
import Play from '../../screens/Main/Game/RockPaper/Play';
import DetailVoucher from '../../screens/Main/Voucher/DetailVoucher';
import SpinAndWin from '../../screens/Main/Game/SpinAndWin/SpinAndWin';
import Campain from '../../screens/Main/Campain';
import DetailCampaign from '../../screens/Main/Campain/DetailCampain';
import HeaderCustom from '../../components/HeaderCustom/HeaderCustom';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <LinearGradient
      colors={['#3f51b5', '#3f51b5', '#FFF']}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1, height: '100%', position: 'relative'}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          zIndex: 1,
          opacity: 0.5,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          opacity: 1,
          flex: 1,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50,
            zIndex: 5,
          }}>
          <DrawerItemList {...props} />

          <TouchableOpacity onPress={handleLogout} style={{padding: 16}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
};

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={routes.MAIN.MAIN_DRAWER}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
        },
      }}
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name={routes.MAIN.MAIN_DRAWER}
        component={MainTab}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={routes.MAIN.GAME.FLAPPY_BIRD}
        component={FlappyBird}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={routes.MAIN.GAME.TOE_TIC}
        component={ToeTic}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'Menu'}
        component={Menu}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'Spin'}
        component={SpinAndWin}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.MAIN.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAIN.VOUCHER}
        component={Voucher}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAIN.LOCATION}
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="map-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAIN.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const MainStack = () => {
  const headerLeft = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginRight: 20,
        }}>
        <IconA name="arrowleft" size={30} color={'white'} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.MAIN.HOME}
          component={MainDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.MAIN.GAME.FLAPPY_BIRD}
          component={FlappyBird}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.MAIN.GAME.TOE_TIC}
          component={ToeTic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Options'}
          component={Options}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Play'}
          component={Play}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DetailVoucher'}
          component={DetailVoucher}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Campaign'}
          component={Campain}
          options={{
            headerLeft: headerLeft,
            headerStyle: {backgroundColor: '#3f51b5'},
            headerTintColor: 'white',
          }}
        />
        {/* <Stack.Screen
          name={'Campaign'}
          component={Campain}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={'DetailCampaign'}
          component={DetailCampaign}
          options={{
            headerLeft: headerLeft,
            headerStyle: {backgroundColor: '#3f51b5'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
