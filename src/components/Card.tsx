import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/color';

export default function Card({
  children = undefined,
  title,
  content,
  onPress,
  location,
  image = '',
}: any) {
  if (children) {
    return <View style={styles.wrapCard}>{children}</View>;
  }
  return (
    // <Text>{title}</Text>
    <TouchableOpacity style={styles.wrapCard} onPress={onPress}>
      <View style={styles.imageCard}>
        <Image source={image} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text numberOfLines={2} style={styles.textContent}>{content}</Text>
      </View>
      <View style={styles.bottomCard}>
        <View style={styles.location}>
          <Icon name="map-marker" color={colors.blue400} size={20} style={{marginRight: 8}} />
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
    width: 250,
    height: 200,
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
    shadowOpacity: 0.10,
    shadowRadius: 4,
  },
  imageCard: {
    width: 200,
    height: 75,
    borderRadius: 30,
    padding: 16,
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
  },

  textContent: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    height: 45,
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
