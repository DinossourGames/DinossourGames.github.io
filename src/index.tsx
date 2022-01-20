import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages';
import {Header} from "./components";
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Home/>
    </React.StrictMode>,
    document.getElementById('root')
);
