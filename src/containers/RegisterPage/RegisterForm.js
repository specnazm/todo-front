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

export default function RegisterForm({ onSubmit, isPending }) {
  const classes = useStyles();

  const handleOnSubmit = (values, { setErrors }) => {
    const { name, email, password, password_confirmation } = values;
    onSubmit(name, email, password, password_confirmation, setErrors);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={registerSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="text"
              name="name"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.firstNameInputLabel} />}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="email"
              name="email"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.emailInputLabel} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="password"
              name="password"
              variant="outlined"
              required
              fullWidth
              label={<FormattedMessage {...messages.passwordInputLabel} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={FormikTextField}
              type="password"
              name="password_confirmation"
              variant="outlined"
              required
              fullWidth
              label={
                <FormattedMessage
                  {...messages.passwordConfirmationInputLabel}
                />
              }
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
          <FormattedMessage {...messages.registerButton} />
        </Button>
      </Form>
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
