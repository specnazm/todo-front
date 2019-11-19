import produce from 'immer';
import {
  LIST_TODOS_SUCCESS,
  DELETE_TODO_REQUEST,
  COMPLETE_TODO_REQUEST
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
            todo.completed = true;
          }
          return todo;
        });
        break;
      default:
    }
  });

export default todoReducer;
