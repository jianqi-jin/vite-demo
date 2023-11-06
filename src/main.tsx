import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalState from './store/global.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalState.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState.Provider>
  </React.StrictMode>,
);
