import { Formik } from 'formik';
import { useState } from 'react';
import { Motion } from '../../components/Motion';
import * as yup from 'yup';

import * as S from './styled';

const user = {
  name: 'Luan Ogawa',
  email: 'ogawa.luan@gmail.com',
  projects: 46
}

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  const updateUserValidationSchema = yup.object().shape({
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
    <S.Button onClick={toggleModal}>
      Alterar perfil
      <S.StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        allowScroll={true}
        onEscapeKeydown={toggleModal}
      >
          <Formik
            initialValues={{ name: '', email: '' }}
            onSubmit={(values) => console.log(values) }
            validationSchema={updateUserValidationSchema}
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
              <S.Form onSubmit={handleSubmit}>
                <S.Title>Atualizar perfil</S.Title>
                <S.Input
                  id="name"
                  name="name"
                  placeholder='Digite seu nome'
                  type="text"
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <S.Errors>{errors.name && errors.name}</S.Errors>
                <S.Input
                  id="email"
                  name="email"
                  placeholder='Digite seu e-mail'
                  type="email"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <S.Errors>{errors.email && errors.email}</S.Errors>
                <S.Button type="submit" disabled={isSubmitting || !(isValid && dirty)}>Atualizar</S.Button>
              </S.Form>
            )}
          </Formik>
        <S.Icon onClick={toggleModal}/>
      </S.StyledModal>
    </S.Button>
  );
}; 

const ProfileComponent = () => {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.TitleContainer>
          <S.Image />

          <S.Name>{user.name}</S.Name>
        </S.TitleContainer>

        <S.DescriptionContainer>
          <S.Description>Email: <span>{user.email}</span></S.Description>
          <S.Description>Projetos cadastrados: <span>{user.projects}</span></S.Description>
        </S.DescriptionContainer>

        <ModalComponent />
      </S.ProfileContainer>
    </S.Container>
  );
};

export const Profile = () => (Motion(ProfileComponent))