import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
    color: #000;
  }

  iframe {
    width: 100vw;
    height: 300px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    iframe {
      width: 700px;
      height: 500px;
      margin-left: 50px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    iframe {
      width: 1000px;
      height: 600px;
    }
  }
`;
