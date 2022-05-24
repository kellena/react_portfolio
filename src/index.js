import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


document.body.style = 'background: #34cfeb';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>
    <App />
    </React.StrictMode>
    
);