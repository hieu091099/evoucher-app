import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import useDesign from '../../hooks/useDesign';
import useRockPaperScissors from '../../hooks/useRockPaperScissors';
import {AppTitles} from '../../lib/titles';
import AnimatedHand from '../Buttons/AnimatedHand';
import RPSText from '../RPSText';
import useSelectMoveAnimation from './animations/useSelectMoveAnimation';

const SelectMove = () => {
  const {color, t} = useDesign();
  const {moveOptions} = useRockPaperScissors();
  const {rStyle} = useSelectMoveAnimation();

  const title = t(AppTitles.SELECT_MOVE_TITLE);

  return (
    <Animated.View style={[styles.moveContainer, rStyle]}>
      <RPSText text={title} heading={3} color={color} />
      <View style={styles.row}>
        {moveOptions.map(({onSwipe, source, move}, index) => {
          return (
            <AnimatedHand
              key={index}
              move={move}
              onSwipe={onSwipe}
              source={source}
            />
          );
        })}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  moveContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    padding: 10,
    marginTop: 10,
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default SelectMove;
