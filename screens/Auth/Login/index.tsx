import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

const loginImage = require('../../../assets/images/login.jpg');
const googleImage = require('../../../assets/images/icon-google.png');
const faceBookImage = require('../../../assets/images/icon-facebook.png');
import {login} from '../../../redux/actions/authAction';
import {primaryColor} from '../../../utils/color';
import Loading from '../../../components/Loading';

const Login = () => {
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  });
  const handleLogin = () => {
    const {username, password} = formLogin;
    if (username === 'Admin' && password === 'Admin') {
      dispatch(login(formLogin));
    }
  };
  const handleOnChangeText = (type: string) => (value: string) => {
    setFormLogin(prev => ({...prev, [type]: value}));
  };

  return (
    <>
      <View
        style={{
          padding: 16,
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
        }}>
        <Text style={{fontSize: 32, marginTop: 32, color: primaryColor}}>
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
          style={{marginBottom: 10}}
          onChangeText={handleOnChangeText('username')}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Type password"
          right={<Icon name="user" size={30} color="#900" />}
          onChangeText={handleOnChangeText('password')}
        />
        <Text
          style={{
            textAlign: 'right',
            fontSize: 16,
            fontWeight: 500,
            marginTop: 8,
            color: primaryColor,
          }}>
          Forgot Password?
        </Text>
        <Button
          icon="login"
          mode="contained"
          style={{marginTop: 20, padding: 5, backgroundColor: primaryColor}}
          onPress={handleLogin}>
          Login
        </Button>
        <Text style={{textAlign: 'center', marginTop: 8, fontSize: 16}}>
          Or
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 16,
            marginTop: 5,
            color: primaryColor,
          }}>
          Sign Up!
        </Text>
        <View style={{borderTopWidth: 1, marginBottom: 20}}></View>
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
    </>
  );
};

export default Login;
