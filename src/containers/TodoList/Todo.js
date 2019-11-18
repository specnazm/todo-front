import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { deleteTodo } from './actions';
import { useDispatch } from 'react-redux';

const key = 'todos';

const useStyles = makeStyles({
  card: {
    minWidth: '30%',
    display: 'inline-block'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  done: {
    color: 'red',
    textDecoration: 'line-through'
  },
  undone: {
    color: '#6495ED'
  }
});

export default function Todo({ key, todo }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title, description, completed, priority, id } = todo;
  const todoClass = completed ? classes.done : classes.undone;

  return (
    <li style={{ listStyleType: 'none' }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Todo :
          </Typography>
          <Typography variant="h5" component="h2" className={todoClass}>
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Priority: {priority}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {!completed ? <Button size="small">Mark as completed</Button> : null}
          {!completed ? <Button size="small">Edit</Button> : null}
          <Button size="small" onClick={() => dispatch(deleteTodo(id))}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </li>
  );
}
