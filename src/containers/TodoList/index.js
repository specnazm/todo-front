import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { listTodos } from './actions';
import Todo from './Todo';
import saga from './saga';
import reducer from './reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';

const key = 'todos';

const useStyles = makeStyles({
  list: {
    display: 'flex'
  }
});

export function TodoList() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const classes = makeStyles();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  useEffect(() => {
    dispatch(listTodos());
  }, []);

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
