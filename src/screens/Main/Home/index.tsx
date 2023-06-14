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
import styles from './styles'

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


