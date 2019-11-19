import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from './actions';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { todoSchema } from './validations';
import messages from './messages';
import { withFormikField } from 'utils/withFormikField';
import { addTodo, editTodo } from './actions';

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

const keyModal = 'modal';
const keyTodo = 'todos';

export default function TodoForm() {
  const open = useSelector(state => state.modal.open);
  const selectedTodo = useSelector(state => state.modal.selectedTodo);
  const dispatch = useDispatch();
  const classes = useStyles();
  const buttonName = selectedTodo
    ? messages.editTodoButton
    : messages.addTodoButton;

  const handleClickOpen = () => {
    dispatch(openModal());
  };
  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleOnSubmit = (values, { setErrors }) => {
    const { title, description, priority } = values;
    selectedTodo
      ? dispatch(
          editTodo(
            title,
            description,
            priority,
            selectedTodo.completed,
            selectedTodo.id,
            setErrors
          )
        )
      : dispatch(addTodo(title, description, priority, setErrors));
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New task</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new todo:</DialogContentText>
          <Formik
            initialValues={{
              title: selectedTodo ? selectedTodo.title : '',
              description: selectedTodo ? selectedTodo.description : '',
              priority: selectedTodo ? selectedTodo.priority : ''
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
                    fullWidth
                    label={
                      <FormattedMessage {...messages.descriptionInputLabel} />
                    }
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
                    label={
                      <FormattedMessage {...messages.priorityInputLabel} />
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <FormattedMessage {...buttonName} />
              </Button>
            </Form>
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
