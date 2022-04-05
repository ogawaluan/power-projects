import { IFrameCard } from '../../components/IframeCard';
import { Motion } from '../../components/Motion';
import * as S from './styled';

const ProjectsComponent = () => {
  function range0toX(end: number) {
    return Array.from(Array(end).keys());
  }

  return (
    <>
      <S.Container>
        {range0toX(30).map((index) => (
          <S.Content key={index}>
            <IFrameCard name="alo" />
          </S.Content>
        ))}
      </S.Container>
    </>
  );
};

export const Projects = () => (Motion(ProjectsComponent));