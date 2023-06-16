import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../utils/color';
export default function Loading() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.5,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 32,
            borderRadius: 10,
            zIndex: 2,
            opacity: 1,
          }}>
          <ActivityIndicator animating={true} color={colors.indigoA200} />
        </View>
      </View>
    </View>
  );
}
