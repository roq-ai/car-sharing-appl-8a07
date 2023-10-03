import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().nullable(),
  mileage: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
