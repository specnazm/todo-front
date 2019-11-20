import produce from 'immer';
import { CLOSE_MODAL, OPEN_MODAL } from './constants';

export const initialState = {
  selectedTodo: {},
  open: false
};

const modalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.open = true;
        draft.selectedTodo = action.todo;
        break;
      case CLOSE_MODAL:
        draft.open = false;
        draft.selectedTodo = {};
        break;
      default:
    }
  });

export default modalReducer;
