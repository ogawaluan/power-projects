import { CgCloseO } from 'react-icons/cg';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  margin-left: 40px;
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
  background-color: #d4910c;

  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: transparent;

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

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  color: #000;
  background: linear-gradient(to right, #f6dd72, #d4910c);
  text-align: center;
  text-decoration: none;
  border: none;
`;