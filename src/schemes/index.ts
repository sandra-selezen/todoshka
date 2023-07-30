import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const newTodoSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
})