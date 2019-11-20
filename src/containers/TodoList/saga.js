import { takeLatest, call, put } from 'redux-saga/effects';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import request from 'utils/request';
import {
  listTodosSucces,
  deleteTodoSuccess,
  completeTodoSucces,
  addTodoSucces,
  editTodoSuccess
} from './actions';
import {
  LIST_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  COMPLETE_TODO_REQUEST,
  ADD_TODO_REQUEST,
  EDIT_TODO_REQUEST
} from './constants';

export function* addTodo({
  title,
  description,
  priority,
  meta: { setErrors }
}) {
  try {
    const response = yield call(request, {
      url: '/api/task',
      method: 'post',
      data: {
        title,
        description,
        priority
      }
    });
    yield put(addTodoSucces(response.data));
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.erorrs));
    }
  }
}

export function* editTodo({
  title,
  description,
  priority,
  id,
  meta: { setErrors }
}) {
  try {
    const response = yield call(request, {
      url: `/api/task/${id}`,
      method: 'put',
      data: {
        title,
        description,
        priority
      }
    });
    yield put(editTodoSuccess(response.data));
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.erorrs));
    }
  }
}

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
  try {
    const response = yield call(request, {
      url: `/api/task/${action.id}`,
      method: 'delete'
    });
    yield put(deleteTodoSuccess());
  } catch (error) {}
}

export function* completeTodo(action) {
  try {
    const response = yield call(request, {
      url: `/api/task/${action.id}`,
      method: 'patch',
      data: {
        completed: !action.completed
      }
    });
    yield put(completeTodoSucces(response.data));
  } catch (error) {}
}

export default function* todoSaga() {
  yield takeLatest(LIST_TODOS_REQUEST, listTodos);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
  yield takeLatest(COMPLETE_TODO_REQUEST, completeTodo);
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
  yield takeLatest(EDIT_TODO_REQUEST, editTodo);
}
