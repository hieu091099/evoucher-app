import {Button, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import {logout} from '../../../redux/actions/authAction';
import Header from '../../../components/Header';
import NotificationIcon from '../../../assets/images/notification.svg';
import Avatar from '../../../assets/images/avatar.svg';

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = {
    name: 'Admin',
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  // || useSelector((state: any) => state.auth.account.user);

  return (
    <Header isGradientBar>
      <View style={styles.dashboard}>
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <View style={styles.avatar}>
              <Avatar width={36} height={36} onPress={openDrawer}/>
            </View>
            <Text
              style={{color: 'white', fontStyle: 'normal', fontWeight: '600'}}>
              {'Hello, ' + user.name}
            </Text>
            <NotificationIcon />
          </View>
          <View style={styles.token}>
            <Text style={styles.tokenText}>Available Tokens</Text>
            <Text style={styles.tokenTotal}>$121321.321321</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.cardButton}>
            <Text>abc</Text>
          </View>
        </View>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  dashboard: {flexDirection: 'column', height: '100%', paddingHorizontal: 16},
  token: {
    flexDirection: 'column',
    height: 81,
    width: 'auto',
    marginTop: 8,
  },
  tokenText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#bbdefb',
  },
  tokenTotal: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 50,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  avatar: {
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 80,
  },
  header: {
    flexDirection: 'column',
  },
  headerBar: {
    marginTop: 16,
    flexDirection: 'row',
    height: 36,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    height: 300,
    flexDirection: 'column',
    background: '#FBFBFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardButton: {
    paddingVertical: 14,
    paddingHorizontal: 29,
    height: 83,
    backgroundColor: '#FEFEFE',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 39,
    elevation: 5,
  },
});
