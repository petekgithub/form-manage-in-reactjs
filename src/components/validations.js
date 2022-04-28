import * as yup from 'yup';

const validations = yup.object().shape({
  // initial value'da verilen değerler ile eşleştirme sağlanır.
  email: yup
  .string()
  .email('Please enter a valid e-mail')
  .required('Required area'), // required yazılmazsa boş formu submit eder.

  password: yup
  .string()
  .min(5, "At least 5 characters")
  .required('Required area'), // 5'ten az şifre girilirse formu submit etmiyor.

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required('Required area'),
});

export default validations