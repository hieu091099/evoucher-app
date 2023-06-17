import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setUsername} from '../redux/actions/gameAction';

const useUsername = () => {
  const {username} = useSelector(state => state.game.rockPaper.game);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(username);

  const onChangeUser = (text: string) => setUser(text);
  const onSubmitUser = () => dispatch(setUsername(user.toLowerCase()));

  return {
    onChangeUser,
    onSubmitUser,
    user,
  };
};

export default useUsername;
