import { Dispatch } from 'redux';
import axios from '../../axios';
import { loginUser } from './actions';

const USERS_URL = '/users';
const SESSIONS_URL = '/sessions';

export const login = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post(SESSIONS_URL, {
      email: 'petro11@gmail.com',
      password: 'super-password',
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser());
    }
  };
};

export const signUp = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post(USERS_URL, {
      email: 'petro11@gmail.com',
      name: 'Petrov Petro',
      password: 'super-password',
      confirmPassword: 'super-password',
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser());
    }
  };
};
