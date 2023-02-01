import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';
import 'boxicons/css/boxicons.min.css';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <App />
    </React.StrictMode>
);
