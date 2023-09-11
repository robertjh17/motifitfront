import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
    <React.StrictMode>
        <h1 className="text-center">Mijn React App</h1>
        <FontAwesomeIcon icon={faCoffee} className="fs-1"/>
    </React.StrictMode>,
    document.getElementById('root')
);