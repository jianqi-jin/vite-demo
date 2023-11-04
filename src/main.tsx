import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalState from './store/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalState.Provider>
      <App />
    </GlobalState.Provider>
  </React.StrictMode>,
);
