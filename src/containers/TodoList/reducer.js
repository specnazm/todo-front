import produce from 'immer';
import {
  LIST_TODOS_SUCCESS,
  DELETE_TODO_REQUEST,
  COMPLETE_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  EDIT_TODO_SUCCESS
} from './constants';

export const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_TODOS_SUCCESS:
        draft.todos = action.todos;
        break;
      case DELETE_TODO_REQUEST:
        draft.todos = state.todos.filter(todo => todo.id != action.id);
        break;
      case COMPLETE_TODO_REQUEST:
        draft.todos = state.todos.map(todo => {
          if (todo.id == action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        break;
      case ADD_TODO_SUCCESS:
        draft.todos = [...state.todos, action.todo];
        break;
      case EDIT_TODO_SUCCESS:
        draft.todos = state.todos.map(todo => {
          if (todo.id == action.todo.id) {
            todo = action.todo;
          }
          return todo;
        });
      default:
    }
  });

export default todoReducer;
