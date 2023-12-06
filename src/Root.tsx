import { BrowserRouter } from 'react-router-dom';
import App from './components/App.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

export default Root;