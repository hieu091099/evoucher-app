import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MenuButton, TextButton} from '../../../../../components/Buttons';
import RPSText from '../../../../../components/RPSText';
import {useDesign} from '../../../../../hooks';
import {AppTitles} from '../../../../../lib/titles';
import {navigate} from '../../../../../navigations/services';

const Menu = ({}: any) => {
  const {backgroundColor, t, color} = useDesign();

  const rpsTitle = t(AppTitles.RPS_TITLE);
  const playTitle = t(AppTitles.PLAY_TITLE);
  const optionsTitle = t(AppTitles.OPTIONS_TITLE);

  const onPressPlay = () => navigate('Play');
  const onPressOptions = () => navigate('Options');

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <RPSText text={rpsTitle} heading={1} color={color} />
      <MenuButton title={playTitle} onPress={onPressPlay} />
      <TextButton title={optionsTitle} onPress={onPressOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 19,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default Menu;
