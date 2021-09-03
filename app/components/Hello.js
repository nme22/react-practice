import React from 'react';

class Hello extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           name: 'Navid'
       }
       this.updateName = this.updateName.bind(this)
   }
   updateName() {
       this.setState({
           name: 'Sandweaver'
       })
   }
   render(){
       return(
           <React.Fragment>
               <h1>Hello, {this.state.name}</h1>
               <button onClick={this.updateName}> Change name</button>
            </React.Fragment>
           
       )
   }
}

export default Hello;