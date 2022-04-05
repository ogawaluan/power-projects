import styled from 'styled-components';
import Modal from 'styled-react-modal'
import { CgCloseO } from 'react-icons/cg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 500px;
  padding: 20px;
  margin: auto 0;
  background-color: #fff;
  border-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    max-width: 500px;
  }
`;  

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: black;
`;

export const Name = styled.h1`
  color: #000;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;  

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  color: #000;

  span {
    color: #3A92D8;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  color: #fff;
  background: linear-gradient(to right, #3A92D8, #874BB1);
  text-align: center;
  text-decoration: none;
  border: none;
`;

export const StyledModal = styled(Modal)`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    max-width: 500px;
  }
`;

export const Title = styled.h1`
  color: #000;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-top: none;
  border-left: none;
  border-right: none;

  &:hover {
    border-bottom: 2px solid;
  }

  &:focus {
    border-bottom: 2px solid;
  }
`;

export const Errors = styled.p`
  font-size: 14px;
  color: red;
  width: 200px;
  height: 50px;

  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    width: 400px;
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
    top: 150px;
    right: 50px;
  }
`;