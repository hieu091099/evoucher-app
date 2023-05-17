import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="test"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
