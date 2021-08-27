import React from 'react';
import ReactDOM from 'react-dom';
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
        <div> Hello Navid! Congrats on creating your first react component! </div>
        )
    }
};

ReactDOM.render(
    <App/>,
    //Where do we want to render this element to?
    document.getElementById('App')
);