import * as Yup from 'yup';

export const COMPETITIONS = [
  {
    id: '1',
    name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
    startDate: '2024-05-06',
    endDate: '2024-06-12',
    place: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
  },
  {
    id: '2',
    name: '20th USA Game - We take PRIDE 2026 (Winter)',
    startDate: '2024-05-06',
    endDate: '2024-06-12',
    place: 'New York, USA',
  },
  {
    id: '3',
    name: '20th British Game - Lets GO 2026 (Winter)',
    startDate: '2024-05-06',
    endDate: '2024-06-12',
    place: 'London, England',
  },
];

export const signUpValidationSchema = Yup.object().shape({
  competition: Yup.string().required('You must pick a competition to register'),
  email: Yup.string()
    .email('Email format is invalid')
    .required('This is a required field.'),
  firstName: Yup.string().required('This is a required field.'),
  lastName: Yup.string().required('This is a required field.'),
  password: Yup.string()
    .required('This is a required field.')
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[0-9]/, 'Password must contain at least one number.')
    .matches(
      /[~`!@#$%^&*()_\-+=?]/,
      'Password must contain at least one special character (~`!@#$%^&*()_-+=?).',
    ),
  confirmPassword: Yup.string()
    .required('This is a required field.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  termsConditions: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions.',
  ),
});
