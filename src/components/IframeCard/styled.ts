import Modal from 'styled-react-modal'
import { CgCloseO } from 'react-icons/cg';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  height: 400px;
  width: 300px;
  padding: 20px;
  background-color: #020808;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #d4910c;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 225px;
  width: 200px;
  background-color: #d4910c;
`;

export const Image = styled.img`
  height: auto;
  width: 150px;
  border-radius: 8px;
`;

export const StyledModal = styled(Modal)`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IFrame = styled.iframe`
  width: 80vw;
  height: 80vh;

  @media screen and (max-width: 1024px) {
    height: 30vh;
  }
`;

export const Icon = styled(CgCloseO)`
  position: fixed;
  top: 60px;
  right: 150px;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    top: 350px;
    right: 50px;
  }
`;