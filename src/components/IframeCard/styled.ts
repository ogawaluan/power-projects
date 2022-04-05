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
  border-radius: 8px;
  height: 400px;
  width: 300px;
  padding: 20px;
  background-color: red;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 200px;
  border-radius: 8px;
`;

export const ActionContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const ActionButton = styled.button`
  display: flex;
  border: none;
  padding: 10px;
  margin-left: 20px;
  border-radius: 8px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
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