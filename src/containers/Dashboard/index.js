import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TodoList from 'containers/TodoList/index.js';
const key = 'dashbaord';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export function Dashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Helmet>
        <title>Todo app</title>
      </Helmet>
      <Typography variant="h2" component="h1" gutterBottom>
        <FormattedMessage {...messages.startProjectHeader} />
        <TodoList />
      </Typography>
    </Container>
  );
}

export default Dashboard;
