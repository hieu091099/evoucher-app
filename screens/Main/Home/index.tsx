import {Button, StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {logout} from '../../../redux/actions/authAction';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{marginHorizontal: 16}}>
      <Text>Home Screen</Text>
      <Button
        title="logout"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
