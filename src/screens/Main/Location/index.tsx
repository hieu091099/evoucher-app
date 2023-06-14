import {Button, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import {logout} from '../../../redux/actions/authAction';
import Header from '../../../components/Header';
import NotificationIcon from '../../../assets/images/notification.svg';
import Avatar from '../../../assets/images/avatar.svg';
import styles from './styles';

export default function Location() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Header>
      <Text>location</Text>
    </Header>
  );
}
