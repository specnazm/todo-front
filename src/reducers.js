import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import appReducer from 'containers/App/reducer';
import todoReducer from 'containers/TodoList/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import modalReducer from 'containers/TodoList/modalReducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    todos: todoReducer,
    modal: modalReducer,
    language: languageProviderReducer,
    router: connectRouter(history)
    // ...injectedReducers
  });

  return rootReducer;
}
