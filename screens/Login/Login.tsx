import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {primaryColor} from '../../ultils/color';

const loginImage = require('../../assets/images/login.jpg');
const googleImage = require('../../assets/images/icon-google.png');
const faceBookImage = require('../../assets/images/icon-facebook.png');
const Login = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
      }}>
      <Text style={{fontSize: 40, marginBottom: 20, color: primaryColor}}>
        Sign In
      </Text>
      <ImageBackground
        source={loginImage}
        resizeMode="cover"
        style={{width: 300, height: 300, alignSelf: 'center'}}
      />
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Type username"
        right={<Icon name="user" size={30} color="#900" />}
      />
      <TextInput
        mode="outlined"
        label="Passowrd"
        placeholder="Type passowrd"
        right={<Icon name="user" size={30} color="#900" />}
      />
      <Button
        icon="login"
        mode="contained"
        style={{marginTop: 20, padding: 5, backgroundColor: primaryColor}}
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
      <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 20}}>
        Or
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: primaryColor,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <ImageBackground
            source={googleImage}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: primaryColor,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <ImageBackground
            source={faceBookImage}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
