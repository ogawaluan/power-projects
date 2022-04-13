import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from 'yup';

import api from '../../services/api';
import { Motion } from "../../components/Motion";
import * as S from '../Profile/styled';
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

interface IFormData {
  name: string;
  link?: string;
}

const UpdateProjectComponent = () => {
  const navigation = useNavigate();
  const { addToast } = useToast();
  const { user } = useAuth();
  const { state } = useLocation();

  const updateProjectValidationSchema = yup.object().shape({
    name: yup
      .string(),
    link: yup
      .string(),
  });

  async function handleOnSubmit(data: IFormData) {
    try {
      Object.assign(data, { ownerId: user.id })

      await api.put(`/links/${state}`, data);

      navigation('/projects');

      addToast({
        type: 'sucess',
        title: 'Projeto atualizado',
        description: 'O projeto já está com as informações novas!',
      });
    } catch(e) {
      console.log(e);

      addToast({
        type: 'error',
        title: 'Erro ao atualizar um projeto',
        description: 'Tente novamente',
      });
    }
  }

  return (
    <S.Container>
      <Formik
        initialValues={{ name: '', link: undefined }}
        onSubmit={(values) => handleOnSubmit(values) }
        validationSchema={updateProjectValidationSchema}
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
            <S.Title>Atualize seu projeto</S.Title>
            <S.Input
              id="name"
              name="name"
              placeholder='Digite o nome do seu projeto'
              type="text"
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <S.Errors>{errors.name && errors.name}</S.Errors>
            <S.Input 
              placeholder='Digite o link gerado no PowerBi'
              type="text"
              onChange={handleChange('link')}
              onBlur={handleBlur('link')}
              value={values.link}
            />
            <S.Errors>{errors.link && touched.link && errors.link}</S.Errors>
            <S.Button type="submit" disabled={isSubmitting || !(isValid && dirty)}>Atualizar</S.Button>
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export const UpdateProject = () => Motion(UpdateProjectComponent)