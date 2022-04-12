import { ReactNode, useState } from 'react';

import powerBiLogo from '../../assets/powerbi.png';
import * as S from './styled';

interface IFrameCardProps {
  id?: string;
  name?: string;
  link: string;
  children?: ReactNode;
}

const ModalComponent = ({ link }: IFrameCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <S.Button onClick={toggleModal}>
      <S.ImageContainer>
        <S.Image src={powerBiLogo} alt="Ivo" />
      </S.ImageContainer>
      <S.StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        allowScroll={true}
        onEscapeKeydown={toggleModal}
      >
        <S.IFrame 
          title="Acidentes nas Estradas Brasileiras - Analise Influenciadores"
          src={link} 
          frameBorder="0" 
          allowFullScreen={true} 
        />
        <S.Icon onClick={toggleModal}/>
      </S.StyledModal>
    </S.Button>
  );
}; 

export function IFrameCard({ name, link, children }: IFrameCardProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{name}</S.Title>

        <ModalComponent link={link} />

        {children}
      </S.Content>
    </S.Container>
  );
}