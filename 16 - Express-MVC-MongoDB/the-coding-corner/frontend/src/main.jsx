import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//import bootstrap javascript (includes popper.js)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
