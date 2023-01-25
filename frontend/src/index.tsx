import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const mainRoutes = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(mainRoutes, document.getElementById('root'));
