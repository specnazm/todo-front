import Yup from 'utils/validations';

export const todoSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  priority: Yup.string().required()
});
