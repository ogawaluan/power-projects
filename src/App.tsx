import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <AppProvider>
      <ModalProvider>
        <Router>
          <Routes />
          
          <GlobalStyle />
        </Router>
      </ModalProvider>
    </AppProvider>
  );
};

export default App;