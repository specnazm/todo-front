import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  LIST_TODOS_REQUEST,
  LIST_TODOS_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  COMPLETE_TODO_REQUEST,
  COMPLETE_TODO_SUCCESS
} from './constants';

export function addTodo(title, description, priority, completed, setErrors) {
  return {
    type: ADD_TODO_REQUEST,
    title,
    description,
    priority,
    completed,
    meta: {
      setErrors
    }
  };
}

export function addTodoSucces() {
  return {
    type: ADD_TODO_SUCCESS
  };
}

export function listTodos() {
  return {
    type: LIST_TODOS_REQUEST
  };
}

export function listTodosSucces(todos) {
  return {
    type: LIST_TODOS_SUCCESS,
    todos
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO_REQUEST,
    id
  };
}

export function deleteTodoSuccess() {
  return {
    type: DELETE_TODO_SUCCESS
  };
}

export function editTodo(id) {
  return {
    type: EDIT_TODO_REQUEST,
    id
  };
}

export function editTodoSuccess(todo) {
  return {
    type: EDIT_TODO_SUCCESS,
    todo
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO_REQUEST,
    id
  };
}

export function completeTodoSucces(todo) {
  return {
    type: COMPLETE_TODO_SUCCESS,
    todo
  };
}
