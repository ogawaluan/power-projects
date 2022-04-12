import { useCallback, useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GoTrashcan } from 'react-icons/go';


import api from '../../services/api';
import { IFrameCard } from '../../components/IframeCard';
import { Motion } from '../../components/Motion';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

interface ILinkProject {
  id: string;
  name: string;
  link: string;
}

const ProjectsComponent = () => {
  const [links, setLinks] = useState<ILinkProject[]>([]);
  const navigation = useNavigate();
  
  useEffect(() => {
    api.get('/links').then((res) => {
      const sortedLinks = res.data.sort((a: ILinkProject, b: ILinkProject) => a.name.localeCompare(b.name));
      
      setLinks(sortedLinks);
    });
  }, []);
  
  async function handleDelete(id: string) {
    try {
      await api.delete(`/links/${id}`);

      setLinks(links.filter(link => link.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <S.Container>
        { links.length > 0 ? links.map((link) => (
          <S.Content key={link.id}>
            <IFrameCard name={link.name} link={link.link}>
              <S.ActionContainer>
                <S.ActionButton onClick={() => navigation('/update-project', { state: link.id })} >
                  <FiEdit size={24} />
                </S.ActionButton>

                <S.ActionButton onClick={() => handleDelete(link.id)}>
                  <GoTrashcan size={24} />
                </S.ActionButton>
              </S.ActionContainer>
            </IFrameCard>
          </S.Content>
        )) : (<h1>Não existem projetos cadastrados ainda!</h1>)}
      </S.Container>
    </>
  );
};

export const Projects = () => (Motion(ProjectsComponent));