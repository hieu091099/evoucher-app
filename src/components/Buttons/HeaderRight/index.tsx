import React from 'react';
// import {Button} from 'react-native';
import useDesign from '../../../hooks/useDesign';
import {AppTitles} from '../../../lib/titles';
import { useSelector, useDispatch } from 'react-redux';
import {clearMove, toggleHelper} from '../../../redux/actions/gameAction';
import TextButton from '../TextButton';

export const HeaderRight = () => {
  const dispatch = useDispatch();
  const {helper, moveVisible} = useSelector(state => state.game.rockPaper.game);
  const {color, t} = useDesign();

  const closeTitle = t(AppTitles.CLOSE_BUTTON);
  const helpTitle = t(AppTitles.HELP_BUTTON);

  const onPress = () =>
    moveVisible ? dispatch(clearMove()) : dispatch(toggleHelper(!helper));

  return (
    <TextButton
      onPress={onPress}
      title={moveVisible ? closeTitle : helpTitle}
      color={color}
    />
  );
};
