import React from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';
import {toggleHelper} from '../../../redux/actions/gameAction';

const useHelperArrowAnimation = () => {
  const dispatch = useDispatch();
  const {helper} = useSelector(state => state.game.rockPaper.game);

  const helpTranslateY = useSharedValue(0);
  const opacity = useSharedValue(0);

  const arrowContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: helpTranslateY.value,
        },
      ],
    };
  });
  const arrowStyle = useAnimatedStyle(() => {
    return {opacity: opacity.value};
  });

  React.useEffect(() => {
    opacity.value = helper ? withSpring(0.1) : withSpring(0);
    helpTranslateY.value = helper
      ? withRepeat(
          withSequence(
            withTiming(helpTranslateY.value + 60, {
              duration: 850,
              easing: Easing.ease,
            }),
            withTiming(0, {
              duration: 850,
              easing: Easing.ease,
            }),
          ),
          3,
          true,
        )
      : 0;
    if (helper) {
      const timeout = setTimeout(() => {
        opacity.value = withSpring(0);
        dispatch(toggleHelper(false));
      }, 5025);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, helpTranslateY, helper, opacity]);

  return {
    arrowContainerStyle,
    arrowStyle,
    helper,
  };
};

export default useHelperArrowAnimation;
