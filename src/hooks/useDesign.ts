import { useSelector, useDispatch } from 'react-redux';
import {
  setDefault,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
  toggleCaps,
  setRandom,
} from '../redux/actions/gameAction';
import getTitle from '../utils/getTitle';

const useDesign = () => {
  const dispatch = useDispatch();
  const {backgroundColor, color, capsActive, glowColor} = useSelector(
    state => state.game.rockPaper.design,
  );

  const toggle = () => dispatch(toggleCaps());

  const title = (text: string) => getTitle(text, capsActive);

  const colorOptions = [
    {title: title('default'), dispatchColor: () => dispatch(setDefault())},
    {title: title('random'), dispatchColor: () => dispatch(setRandom())},
    {title: title('red'), dispatchColor: () => dispatch(setRed())},
    {title: title('orange'), dispatchColor: () => dispatch(setOrange())},
    {title: title('yellow'), dispatchColor: () => dispatch(setYellow())},
    {title: title('green'), dispatchColor: () => dispatch(setGreen())},
    {title: title('blue'), dispatchColor: () => dispatch(setBlue())},
    {title: title('purple'), dispatchColor: () => dispatch(setPurple())},
  ];

  return {
    backgroundColor,
    colorOptions,
    color,
    capsActive,
    glowColor,
    t: title,
    toggleCaps: toggle,
  };
};

export default useDesign;
