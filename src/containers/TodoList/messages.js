import { defineMessages } from 'react-intl';

export const scope = 'register_page';

export default defineMessages({
  registerButton: {
    id: `${scope}.button.register`,
    defaultMessage: 'Register'
  },
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Already have an account? Login'
  },
  facebookButton: {
    id: `${scope}.button.facebook`,
    defaultMessage: 'Register with Facebook'
  },
  googleButton: {
    id: `${scope}.button.google`,
    defaultMessage: 'Register with Google'
  },
  titleInputLabel: {
    id: `${scope}.input_label.title`,
    defaultMessage: 'Title'
  },
  descriptionInputField: {
    id: `${scope}.input_label.description`,
    defaultMessage: 'Description'
  },
  priorityInputLabel: {
    id: `${scope}.input_label.priority`,
    defaultMessage: 'Priority'
  }
});
