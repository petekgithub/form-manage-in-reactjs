import * as yup from 'yup';

const validations = yup.object().shape({
  // initial value'da verilen değerler ile eşleştirme sağlanır.
  email: yup.string().email().required(), // required yazılmazsa boş formu submit eder.
  password: yup.string().min(5).required(), // 5'ten az şifre girilirse formu submit etmiyor.
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
});

export default validations