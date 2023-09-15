import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/About'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/CustomBootstrap.css'
import './styles/CustomStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
    <React.StrictMode>

        <App />
    </React.StrictMode>,
    document.getElementById('root')
);