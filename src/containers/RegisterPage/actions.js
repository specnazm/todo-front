import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './constants';

export function register(
  name,
  email,
  password,
  password_confirmation,
  setErrors
) {
  return {
    type: REGISTER_REQUEST,
    name,
    email,
    password,
    password_confirmation,
    meta: {
      setErrors
    }
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR
  };
}
