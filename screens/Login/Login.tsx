import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
const Login = () => {
  return (
    <View style={{padding: 10}}>
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Type username"
        right={<TextInput.Affix text="100" />}
      />
      <TextInput
        mode="outlined"
        label="Passowrd"
        placeholder="Type passowrd"
        right={<Icon name="user" size={30} color="#900" />}
      />
      <Button
        icon="camera"
        mode="contained"
        style={{marginTop: 10}}
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
      <Icon name="user" size={30} color="#900" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
