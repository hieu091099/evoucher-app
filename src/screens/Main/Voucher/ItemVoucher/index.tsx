import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity} from 'react-native';
import McLogo from '../../../../assets/mc-donalds-logo.svg';
import moment from 'moment';
import colors from '../../../../utils/color';

export default function ItemVoucher({
  logo = <McLogo />,
  title = 10,
  branch = 'McDonalds',
  endDate = moment().format('DD MMMM YYYY'),
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 104,
        padding: 8,
        backgroundColor: 'white',
        marginTop: 16,
        borderRadius: 8,
        flexDirection: 'row',
        position: 'relative',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {logo}
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          position: 'relative',
          paddingLeft: 16,
        }}>
        <View style={{flexDirection: 'column', marginTop: 16}}>
          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 24,
              fontWeight: '600',
              lineHeight: 24,
            }}>
            {`$ ${title}`}
          </Text>

          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 19.5,
            }}>
            {branch}
          </Text>
        </View>

        <Text
          style={{
            fontStyle: 'normal',
            fontSize: 10,
            fontWeight: '500',
            lineHeight: 12,
            color: 'rgba(0, 0, 0, 0.3)',
          }}>
          {' '}
          {`valid until ${endDate}`}{' '}
        </Text>
        <View
          style={{
            position: 'absolute',
            borderWidth: 2,
            borderColor: 'rgba(102, 102, 102, 0.2)',
            borderStyle: 'dashed',
            top: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </View>

      <LinearGradient
        colors={[colors.blue800, colors.blue800]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[1, 0]}
        style={{
          position: 'absolute',
          width: 32,
          height: 32,
          borderRadius: 80,
          backgroundColor: 'red',
          right: -15,
          top: '40%',
          zIndex: 20,
        }}
      />
    </TouchableOpacity>
  );
}
