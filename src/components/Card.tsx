import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/color';
import API from '../utils/api';
export default function Card({children = undefined, onPress, ...props}: any) {
  const {
    name,
    numberVoucher,
    description,
    campaignImage,
    status,
    type,
    location = '',
    isFullWidth,
  } = props;
  if (children) {
    return <View style={styles.wrapCard}>{children}</View>;
  }
  const checkStatus = {
    Pending: 'Pending',
    Ended: 'Ended',
    Rejected: 'Rejected',
    Running: 'Running',
  };
  const colorStatus = () => {
    switch (status) {
      case 'Running':
        return colors.green400;
      case 'Pending':
        return colors.yellow400;
      case 'Rejected':
        return colors.red400;
      case 'Ended':
        return colors.grey400;
      default:
        return colors.grey400;
    }
  };
  return (
    // <Text>{title}</Text>
    <TouchableOpacity style={[styles.wrapCard, isFullWidth && {width: '100%'}]} onPress={onPress}>
      <View style={styles.imageCard}>
        <Image
          source={{uri: API.GET_IMAGES(campaignImage)}}
          style={{width: '100%', height: '100%', borderRadius: 12}}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text numberOfLines={1} style={styles.textContent1}>
          {description}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.textContent}>Số lượng: </Text>
            <Text numberOfLines={1}>{numberVoucher}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.textContent}>Tình trạng: </Text>
            <Text numberOfLines={1} style={{color: colorStatus()}}>
              {status}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textContent}>Loại: </Text>
          <Text numberOfLines={1}>{type}</Text>
        </View>
      </View>
      <View style={styles.bottomCard}>
        <View style={styles.location}>
          <Icon
            name="map-marker"
            color={colors.blue400}
            size={20}
            style={{marginRight: 8}}
          />
          <Text>{location}</Text>
        </View>
        <View>
          <Icon name="angle-double-right" color={colors.blue400} size={26} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapCard: {
    width: 320,
    height: 310,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: colors.blue100,
    borderWidth: 0.5,
    padding: 16,
    shadowColor: colors.blue400,
    shadowOffset: {
      width: 12,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageCard: {
    width: 'auto',
    height: 125,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 16,
      height: 16,
    },
    shadowOpacity: 0.09,
    shadowRadius: 35,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#212121',
    marginTop: 8,
  },
  textContent1: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#616161',
    overflow: 'hidden',
  },
  textContent: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#616161',
    overflow: 'hidden',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
