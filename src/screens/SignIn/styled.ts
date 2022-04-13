import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #f6dd72, #d4910c);

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px;

    h1 {
      color: #000;
      margin-bottom: 60px;
    }

    input {
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
    }

    .errors {
      font-size: 14px;
      color: red;
      width: 200px;
      height: 50px;
    }

    button {
      width: 100%;
      padding: 15px;
      margin-top: 40px;
      border: none;
      color: #000;
      background: linear-gradient(to right, #f6dd72, #d4910c);

      &:disabled {
        opacity: 0.6;
      }
    }

    div {
      margin-top: 40px;
      text-align: center;
      p {
        color: #96989e;
        margin-top: 10px;
      }

      a {
        color: #d4910c;
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    form {
      max-width: 400px;

      .errors {
        width: 400px;
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    form {
      max-width: 500px;

      .errors {
        width: 400px;
      }
    }
  }
`;