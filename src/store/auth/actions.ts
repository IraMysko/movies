import { LOGIN } from './constants';
import { LoginAction } from './types';

export const loginUser = (): LoginAction => ({
  type: LOGIN,
});
