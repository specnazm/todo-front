import Yup from 'utils/validations';

export const todoSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  priority: Yup.string().required()
});
