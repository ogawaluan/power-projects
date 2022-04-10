import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../../hooks/auth';

import * as S from './styled';

interface IFormData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { signIn } = useAuth();
  const navigation = useNavigate();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('Endereço de e-mail é obrigatório'),
    password: yup
      .string()
      .min(8, ({ min }) => `A senha deve conter no mínimo ${min} caracteres`)
      .required('Senha é obrigatório'),
  });

  async function handleOnSubmit(data: IFormData) {
    await signIn({
      email: data.email,
      password: data.password,
    });

    navigation('/home')
  }

  return (
    <S.Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleOnSubmit(values) }
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              id="email"
              name="email"
              placeholder='Digite seu e-mail'
              type="email"
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <p className="errors">{errors.email && errors.email}</p>
            <input 
              placeholder='Digite sua senha'
              type="password"
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <p className="errors">{errors.password && touched.password && errors.password}</p>
            <button type="submit" disabled={isSubmitting || !(isValid && dirty)}>Entrar</button>

            <div className="links">
              <p>Esqueceu <Link to={''}>sua senha?</Link></p>
              <p>Não tem uma conta? <Link to={'sign-up'}>Inscreva-se</Link></p>
            </div>
          </form>
        )}
      </Formik>
    </S.Container>
  );
};