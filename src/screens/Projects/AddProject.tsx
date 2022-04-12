import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

import api from '../../services/api';
import { Motion } from "../../components/Motion";
import * as S from '../Projects/styled';

interface IFormData {
  name: string;
  link: string;
}

const AddProjectComponent = () => {
  const navigation = useNavigate();

  const addProjectValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('O nome do seu projeto é obrigatório'),
    link: yup
      .string()
      .required('O link para o seu projeto é obrigatório'),
  });

  async function handleOnSubmit(data: IFormData) {
    await api.post('/links', data);

    navigation('/projects');
  }

  return (
    <S.Container>
      <Formik
        initialValues={{ name: '', link: '' }}
        onSubmit={(values) => handleOnSubmit(values) }
        validationSchema={addProjectValidationSchema}
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
            <S.Title>Adicione um projeto</S.Title>
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
            <S.Button type="submit" disabled={isSubmitting || !(isValid && dirty)}>Adicionar</S.Button>
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export const AddProject = () => Motion(AddProjectComponent)