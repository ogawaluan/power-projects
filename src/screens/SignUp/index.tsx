import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import * as S from './styled';

export const SignUp = () => {
  const singUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required(),
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('Endereço de e-mail é obrigatório'),
    password: yup
      .string()
      .min(8, ({ min }) => `A senha deve conter no mínimo ${min} caracteres`)
      .required('Senha é obrigatório'),
  });

  return (
    <S.Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={singUpValidationSchema}
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <input
              id="name"
              name="name"
              placeholder='Digite seu nome'
              type="text"
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <p className="errors">{errors.name && errors.name}</p>
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
            <button type="submit" disabled={isSubmitting || !(isValid && dirty)}>Criar sua conta</button>

            <Link to={'/'}>Voltar para o login</Link>
          </form>
        )}
      </Formik>
    </S.Container>
  );
};