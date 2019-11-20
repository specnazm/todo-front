import { defineMessages } from 'react-intl';

export const scope = 'register_page';

export default defineMessages({
  addTodoButton: {
    id: `${scope}.button.add`,
    defaultMessage: 'Add new task'
  },
  editTodoButton: {
    id: `${scope}.button.add`,
    defaultMessage: 'Edit task'
  },
  titleInputLabel: {
    id: `${scope}.input_label.title`,
    defaultMessage: 'Title'
  },
  descriptionInputLabel: {
    id: `${scope}.input_label.description`,
    defaultMessage: 'Description'
  },
  priorityInputLabel: {
    id: `${scope}.input_label.priority`,
    defaultMessage: 'Priority'
  }
});
