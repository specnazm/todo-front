import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { listTodosSucces, deleteTodoSuccess } from './actions';
import { LIST_TODOS_REQUEST, DELETE_TODO_REQUEST } from './constants';

export function* listTodos() {
  try {
    const response = yield call(request, {
      url: '/api/task',
      method: 'get'
    });
    yield put(listTodosSucces(response.data));
  } catch (error) {}
}

export function* deleteTodo(action) {
  console.log('usao u sagu u delete');
  try {
    const url = '/api/task/' + action.id;
    const response = yield call(request, {
      url: url,
      method: 'delete'
    });
    console.log(response);
    yield put(deleteTodoSuccess());
  } catch (error) {}
}

export default function* todoSaga() {
  yield takeLatest(LIST_TODOS_REQUEST, listTodos);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}
