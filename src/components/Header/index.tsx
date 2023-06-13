import React from 'react';
import {View, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({
  backgroundColor,
  barStyle,
  children,
  isGradientBar,
  colorStart = '#3f51b5',
  colorEnd = '#90caf9',
}: any) => {
  if (isGradientBar) {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          colors={[colorStart, colorEnd]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 1]}
          style={{flex: 1}}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    // Add any custom styles for your header content
  },
});

export default Header;
