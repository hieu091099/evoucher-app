import {Button, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import routes from '../../../utils/routes';
import {navigate} from '../../../navigations/services';
import Header from '../../../components/Header';
import styles from './styles';
import colors from '../../../utils/color';

export default function Voucher() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Header isGradientBar colorEnd={colors.blue100}>
      <View style={{paddingHorizontal: 16}}>
        <Text>voucher</Text>
      </View>
    </Header>
  );
}
