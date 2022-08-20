// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTES
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initFirebase } from './firebase/config';

// ESTILOS
import './index.scss';
import "./global.scss"

initFirebase();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
