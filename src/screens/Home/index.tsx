import { Motion } from '../../components/Motion';
import * as S from './styled';

const HomeComponent = () => {
  return (
    <>
      <S.Container>
        <h1>Bem vindo John Doe</h1>

        <iframe 
          title="Acidentes nas Estradas Brasileiras - Analise Influenciadores" 
          src="https://app.powerbi.com/view?r=eyJrIjoiOWMxZWE5YTQtN2QzMi00ZTUzLThjN2EtYTc3OGE2Y2Y1MWYyIiwidCI6ImMwZjU3ZTAxLTk1YWItNDg0Yi1hNjQwLTBmMGJlYjVlZWNhOSJ9" 
          frameBorder="0" 
          allowFullScreen={true}
        />
      </S.Container>
    </>
  );
};

export const Home = () => (Motion(HomeComponent));
