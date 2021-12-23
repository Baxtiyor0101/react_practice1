import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Hooks } from './Hooks.jsx';
import { Navbar } from './navbar';
import { Movie } from './movie';
import { Context } from './context';
 ReactDom.render(
    <React.StrictMode>
        <Context >
            <Navbar /> 
            <Movie />  
        </Context>
    </React.StrictMode>,

    document.getElementById('root')

);