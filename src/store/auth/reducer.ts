import { LOGIN } from './constants';
import { ActionType, AuthType } from './types';

const initialAuth: AuthType = {
  isAuth: false,
};

export const authReducer = (state = initialAuth, action: ActionType): AuthType => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};
