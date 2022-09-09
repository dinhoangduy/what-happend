import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import 'custom-cursor-react/dist/index.css';
import 'rodal/lib/rodal.css';
import './sass/index.scss';


import AppRoutes from './routes/AppRoutes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
