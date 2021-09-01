import React from 'react';

class Hello extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           name: 'Navid'
       }
   }
   render(){
       return(
           <h1>Hello, {this.state.name}</h1>
       )
   }
}

export default Hello;