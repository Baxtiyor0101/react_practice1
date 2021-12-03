import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Counter from './components/Counter';
ReactDom.render(
    <App/>,
    <Counter/>,
    <Counter/>,
    <Counter/>,
    <Counter/>,
    document.getElementById('root')

);