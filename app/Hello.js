import React from 'react';

class Hello extends React.Component {
    render() {
        console.log(this.props)
        return(
            <h2>
                Hello, {this.props.name}
            </h2>
        )
    }
}

export default Hello;