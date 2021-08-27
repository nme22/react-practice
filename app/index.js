import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './badge';
import Hello from './Hello';
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
    <Badge user={{
        name: 'Navid Ebrahimi',
        img: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.6435-9/142276688_4014998048520117_5998950829911969368_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0bXUq48HulsAX8ztuMZ&_nc_ht=scontent.fewr1-6.fna&oh=e2b1d6450283c37ac82d80a677696319&oe=614FF81F',
        username: 'nme22'
    }}
    />,
    //Where do we want to render this element to?
    document.getElementById('App')
);