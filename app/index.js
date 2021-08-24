import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component
//State
//Lifecycle
//UI

class App extends React.Component{
    render() {
        return (
        <div> Hello World! </div>
        )
    }
};

ReactDOM.render(
    <App/>,
    //Where do we want to render this element to?
    document.getElementById('app')
);

