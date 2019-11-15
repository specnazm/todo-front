import Yup from 'utils/validations';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  password_confirmation: Yup.string().required()
});
