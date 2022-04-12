import { Formik } from 'formik';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import api from '../../services/api';
import { Motion } from '../../components/Motion';
import { useAuth } from '../../hooks/auth';
import * as S from './styled';

interface ILinkProject {
  id: string;
  name: string;
  link: string;
}

interface IFormData {
  id?: string;
  name?: string;
  email?: string; 
}

const ProfileComponent = () => {
  const [links, setLinks] = useState<ILinkProject[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [userData, setUserData] = useState(user);

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  const updateUserValidationSchema = yup.object().shape({
    name: yup
      .string(),
    email: yup
      .string()
      .email('Insira um e-mail válido'),
  });

  useEffect(() => {
    api.get('/links').then((res) => {
      setLinks(res.data);
    });
  }, []);

  async function handleOnSubmit(data: IFormData) {
    const userInLocalStorage = localStorage.getItem('@PowerProjects:user');
    let updatedUser
    
    if (userInLocalStorage) {
      updatedUser = {
        ...JSON.parse(userInLocalStorage),
        name: data.name === '' ? user.name : data.name,
        email: data.email === '' ? user.email : data.email,
      }
    }

    data.name = data.name === '' ? user.name : data.name; 
    data.email = data.email === '' ? user.email : data.email; 

    await api.put(`/users/${user.id}`, data).then((res) => {
      const userResponse = {
        ...userData,
        name: res.data.name,
        email: res.data.email,
      };
      
      setUserData(userResponse);
    });

    localStorage.setItem('@PowerProjects:user', JSON.stringify(updatedUser));

    toggleModal();
  }

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.TitleContainer>
          <S.Image />

          <S.Name>{userData.name}</S.Name>
        </S.TitleContainer>

        <S.DescriptionContainer>
          <S.Description>Email: <span>{userData.email}</span></S.Description>
          <S.Description>Projetos cadastrados: <span>{links.length}</span></S.Description>
        </S.DescriptionContainer>

        <S.Button onClick={toggleModal}>
        Alterar perfil
      </S.Button>
      <S.StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        allowScroll={true}
        onEscapeKeydown={toggleModal}
      >
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={(values) => handleOnSubmit(values) }
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
      </S.ProfileContainer>
    </S.Container>
  );
};

export const Profile = () => (Motion(ProfileComponent));