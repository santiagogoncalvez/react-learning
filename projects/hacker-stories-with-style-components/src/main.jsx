import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
