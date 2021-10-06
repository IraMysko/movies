import { LOGIN } from './constants';

export type AuthType = {
  isAuth: boolean;
};

export type LoginAction = {
  type: typeof LOGIN;
};

export type ActionType = LoginAction;
