import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {BounceIn, BounceOut} from 'react-native-reanimated';
import {colors} from '../../../lib/colors';
import {GameMoves} from '../../../lib/constants';
import { useSelector, useDispatch } from 'react-redux';
import {clearMove} from '../../../redux/actions/gameAction';
import getPlayerMoveIcon from '../../../utils/imageDictionary';
import usePlayerMoveIconAnimation from '../animations/usePlayerMoveIconAnimation';

type MoveIconProps = {
  playerSelection: string;
  shared: number;
  flipped: boolean;
};

const PlayerMoveIcon = ({
  playerSelection,
  shared = 1,
  flipped = false,
}: MoveIconProps) => {
  const {userPlay, compPlay} = useSelector(state => state.game.rockPaper.game);
  const {backgroundStyle} = usePlayerMoveIconAnimation(shared);
  const dispatch = useDispatch();
  const showMove = userPlay !== GameMoves.EMPTY && compPlay !== GameMoves.EMPTY;
  const icon = getPlayerMoveIcon(playerSelection);

  const onClear = () => dispatch(clearMove());

  return (
    <Animated.View
      style={[
        styles.moveContainer,
        backgroundStyle,
        flipped && styles.flippedImage,
      ]}>
      {showMove && (
        <Pressable onPress={onClear}>
          <Animated.Image
            entering={BounceIn.delay(180)}
            exiting={BounceOut}
            style={[styles.moveIcon]}
            source={icon}
          />
        </Pressable>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  moveContainer: {
    marginVertical: 30,
    alignContent: 'center',
    borderColor: colors.black,
    borderWidth: 2,
    width: 134,
    height: 134,
    borderRadius: 67,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 0,
  },
  moveIcon: {
    width: 100,
    height: 100,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  flippedImage: {
    transform: [{scaleX: -1}],
  },
});

export default PlayerMoveIcon;
