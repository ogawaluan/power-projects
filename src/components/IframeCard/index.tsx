import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GoTrashcan } from 'react-icons/go';

import * as S from './styled';

interface IFrameCardProps {
  name: string;
}

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <S.Button onClick={toggleModal}>
      <S.Image src="https://avatars.githubusercontent.com/u/40743787?v=4" alt="Ivo" />
      <S.StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        allowScroll={true}
        onEscapeKeydown={toggleModal}
      >
        <S.IFrame 
          title="Acidentes nas Estradas Brasileiras - Analise Influenciadores"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWMxZWE5YTQtN2QzMi00ZTUzLThjN2EtYTc3OGE2Y2Y1MWYyIiwidCI6ImMwZjU3ZTAxLTk1YWItNDg0Yi1hNjQwLTBmMGJlYjVlZWNhOSJ9" 
          frameBorder="0" 
          allowFullScreen={true} 
        />
        <S.Icon onClick={toggleModal}/>
      </S.StyledModal>
    </S.Button>
  );
}; 

export function IFrameCard({ name }: IFrameCardProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{name}</S.Title>

        <ModalComponent />

        <S.ActionContainer>
          <S.ActionButton>
            <FiEdit size={24} />
          </S.ActionButton>

          <S.ActionButton>
            <GoTrashcan size={24} />
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
    </S.Container>
  );
}