import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { Header } from './components/Header';

const App = () => {
  return (
    <ModalProvider>
      <Router>
        { window.location.pathname === '/' || window.location.pathname === '/sign-up' ? null : (<Header />) }
        <Routes />
        
        <GlobalStyle />
      </Router>
    </ModalProvider>
  );
};

export default App;