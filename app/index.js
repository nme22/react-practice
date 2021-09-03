import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/badge';
import Hello from './components/Hello';
import Popular from './components/popular';
import './index.css';

//Component
//State
//Lifecycle
//UI

// When using modules, we need a module bundler so the browser can understand.
// When using jsx we need a compiler to translate our jsx into normal javascript syntax that the browser can understand.

class App extends React.Component{
    render() {
        return (
        <div className='container'> 
            <Popular/>
            <Hello/>
        </div>
        )
    }
};

ReactDOM.render(
    <App/>,
    
    document.getElementById('App')
);
