import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

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
      <View style={{backgroundColor: MD2Colors.white, padding: 32}}>
        <ActivityIndicator animating={true} color={MD2Colors.indigoA200} />
      </View>
    </View>
  );
}
