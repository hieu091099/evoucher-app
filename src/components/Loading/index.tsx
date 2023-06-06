import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../utils/color';
export default function Loading() {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
      }}>
      <View style={{backgroundColor: colors.white, padding: 32}}>
        <ActivityIndicator animating={true} color={colors.indigoA200} />
      </View>
    </View>
  );
}
