import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Modal, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../utils/color';

import {navigate} from '../../../navigations/services';
import routes from '../../../utils/routes';
import {useDispatch} from 'react-redux';
import {registerRequest} from '../../../redux/actions/authAction';

const registerImage = require('../../../assets/images/register.png');
const Register = () => {
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleRegister = () => {
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patternPhone = /^\d+$/;
    if (!patternEmail.test(formRegister.email)) {
      setErrorMessage('Email wrong format');
      setVisible(true);
      return;
    }
    if (!patternPhone.test(formRegister.phone)) {
      setErrorMessage('Phone must be a number');
      setVisible(true);
      return;
    }
    dispatch(registerRequest(formRegister));
  };
  const hideModal = () => setVisible(false);
  const handleOnChangeText = (type: string) => (value: string) => {
    setFormRegister(prev => ({...prev, [type]: value}));
  };
  return (
    <View style={{padding: 16, height: '100%', backgroundColor: colors.white}}>
      <Text style={{fontSize: 32, marginTop: 32, color: colors.blueA400}}>
        Sign Up
      </Text>
      <ImageBackground
        source={registerImage}
        resizeMode="cover"
        style={{width: 300, height: 300, alignSelf: 'center'}}
      />
      <View>
        <TextInput
          mode="outlined"
          label="Username"
          autoCapitalize="none"
          placeholder="Type username"
          right={<Icon name="user" size={30} color="#900" />}
          onChangeText={handleOnChangeText('username')}
        />
        <TextInput
          mode="outlined"
          secureTextEntry={true}
          label="Password"
          autoCapitalize="none"
          placeholder="Type password"
          right={<Icon name="user" size={30} color="#900" />}
          onChangeText={handleOnChangeText('password')}
        />
        <TextInput
          mode="outlined"
          label="Email"
          autoCapitalize="none"
          placeholder="Type email"
          right={<Icon name="user" size={30} color="#900" />}
          onChangeText={handleOnChangeText('email')}
          // theme={{colors: {primary: 'red'}}}
        />
        <TextInput
          mode="outlined"
          label="Phone"
          autoCapitalize="none"
          placeholder="Type phone"
          right={<Icon name="user" size={30} color="#900" />}
          onChangeText={handleOnChangeText('phone')}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            I already have an acount
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigate(routes.AUTH_STACK, {screen: routes.AUTH.LOGIN})
            }>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 700,
                fontSize: 16,
                color: colors.blueA400,
              }}>
              Sign In!
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          icon="login"
          mode="contained"
          style={{padding: 5, backgroundColor: colors.blueA400}}
          onPress={() => {
            handleRegister();
          }}>
          Register
        </Button>
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          height: 100,
          padding: 20,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>
          {errorMessage}!
        </Text>
      </Modal>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
