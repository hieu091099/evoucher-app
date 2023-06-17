import React from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {resetGame} from '../../../redux/actions/gameAction';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {noop} from '../../../lib/constants';
import useDesign from '../../../hooks/useDesign';

export const HeaderLeftPlay = (props: HeaderBackButtonProps) => (
  <HeaderBack {...props} />
);

const HeaderBack = (props: HeaderBackButtonProps) => {
  const {goBack} = useNavigation();
  const {t} = useDesign();
  const dispatch = useDispatch();
  const {round} = useSelector(state => state.game.rockPaper.game);

  const exitOnPress = async () => {
    await dispatch(resetGame());
    goBack();
  };

  const backOnPress = async () => {
    if (round > 1) {
      Alert.alert(
        t('Quit Game'),
        t(
          'Are you sure you would like to quit the game? All changes will be lost.',
        ),
        [
          {
            onPress: noop,
            style: 'cancel',
            text: t('Cancel'),
          },
          {
            onPress: exitOnPress,
            style: 'destructive',
            text: t('Quit'),
          },
        ],
      );
    } else {
      goBack();
    }
  };

  return <HeaderBackButton {...props} onPress={backOnPress} />;
};
