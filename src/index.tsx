import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const componenteAtual = window.location.pathname === '/' ? <Inicio /> :<Cardapio />;

root.render(
  <React.StrictMode>
    {componenteAtual}
    
  </React.StrictMode>
);