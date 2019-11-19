import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { registerSchema } from './validations';
import messages from './messages';

import { withFormikField } from 'utils/withFormikField';
import { dispatch } from 'rxjs/internal/observable/range';

const FormikTextField = withFormikField(TextField);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function TodoForm() {
  const classes = useStyles();

  const handleOnSubmit = values => {
    const { title, description, priority } = values;
    dispatch(addTodo(title, description, priority, completed));
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        priority: ''
      }}
      validationSchema={todoSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="text"
              name="title"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.titleInputLabel} />}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="text"
              name="description"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.descriptionInputLabel} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="priority"
              name="priority"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.priorityInputLabel} />}
            />
          </Grid>
        </Grid>
        <Button
          disabled={isPending}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          <FormattedMessage {...messages.addTodoButton} />
        </Button>
      </Form>
    </Formik>
  );
}
