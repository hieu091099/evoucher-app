import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const HeaderCustom = () => {
  return (
    <View
      style={{
        height: 50,
        position: 'absolute',
        top: 10,
        backgroundColor: 'red',
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
      }}>
      <TouchableOpacity>
        <Icon name="arrowleft" />
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCustom;
