import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity} from 'react-native';
import McLogo from '../../../../assets/mc-donalds-logo.svg';
import moment from 'moment';
import colors from '../../../../utils/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {goBack} from '../../../../navigations/services';
import Header from '../../../../components/Header';
import {useRoute} from '@react-navigation/native';

export default function DetailVoucher({
  logo = <McLogo />,
  title = 10,
  branch = 'McDonalds',
  endDate = moment().format('DD MMMM YYYY'),

}) {
  const route = useRoute()
  const {itemVoucher} = route.params
  return (
    <Header isGradientBar colorStart={colors.blue800} colorEnd={colors.blue800}>
      <View style={{flex: 1, padding: 16, alignItems: 'center'}}>
        <View
          style={{
            marginTop: 80,
            height: 520,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 12,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              padding: 32,
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', height: 49}}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {logo}
                </View>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                  <Text
                    style={{
                      fontStyle: 'normal',
                      fontSize: 24,
                      fontWeight: '500',
                      lineHeight: 29,
                    }}>
                    {`${title} OFF`}
                  </Text>
                  <Text
                    style={{
                      fontStyle: 'normal',
                      fontSize: 16,
                      fontWeight: '500',
                      lineHeight: 20,
                    }}>
                    {branch}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 32,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontStyle: 'normal',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 20,
                  }}>
                  {`Get ${title} at you next ${branch} buy`}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingLeft: 16,
                position: 'relative',
                marginTop: 70,
              }}>
              <View
                style={{
                  position: 'absolute',
                  borderWidth: 2,
                  borderColor: 'rgba(102, 102, 102, 0.2)',
                  borderStyle: 'dashed',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              />
              <Text
                style={{
                  fontStyle: 'normal',
                  fontSize: 10,
                  fontWeight: '500',
                  lineHeight: 12,
                  color: 'rgba(0, 0, 0, 0.3)',
                }}>
                {`valid until ${endDate}`}{' '}
              </Text>
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
                left: -15,
                bottom: '41%',
                zIndex: 20,
              }}
            />
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
                bottom: '41%',
                zIndex: 20,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}>
          <View
            style={{
              width: 90,
              height: 90,
              marginTop: 50,
              borderRadius: 80,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="close" size={32} />
          </View>
        </TouchableOpacity>
      </View>
    </Header>
  );
}
