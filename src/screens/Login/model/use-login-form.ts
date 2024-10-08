import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { emailRegex } from '../../../constants/regex';

const schema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .transform(value => (value === '' ? null : value))
    .test('', 'errors:emailNotValid', value => (value ? !!emailRegex.test(value) : true))
    .max(100)
    .required('errors:requiredField'),
  password: yup.string().min(8, 'errors:passwordMinLength').required('errors:requiredField'),
});

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return form;
};
