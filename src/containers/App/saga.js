import { takeLatest, call, put } from 'redux-saga/effects';
import { removeItem, getItem } from 'utils/localStorage';
import request from 'utils/request';
import { fetchAuthenticatedUserSuccess, logoutSuccess } from './actions';
import { FETCH_AUTHENTICATED_USER_REQUEST, LOGOUT_REQUEST } from './constants';
import { statement } from '@babel/template';

export function* fetchUser() {
  try {
    const user = yield call(request, {
      url: 'http://127.0.0.1:8000/api/profile',
      method: 'get'
    });
    yield put(fetchAuthenticatedUserSuccess(user));
  } catch (error) {
    //
  }
}

export function* logout() {
  try {
    yield call(request, {
      url: '/auth/logout',
      method: 'post'
    });
    yield put(logoutSuccess());
    yield call(removeItem, 'token');
  } catch (error) {
    //
  }
}

export default function* appSaga() {
  yield takeLatest(FETCH_AUTHENTICATED_USER_REQUEST, fetchUser);
  yield takeLatest(LOGOUT_REQUEST, logout);
}
