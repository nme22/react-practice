import React from 'react';

class Avatar extends React.Component {
    render() {
        return(
            <img src={this.props.img} />
        )
    }
}

class Label extends React.Component {
    render() {
        return (
            <h3>Name: {this.props.name} </h3>
        )
    }
}

class GithubUsername extends React.Component {
    render() {
        return (
            <h3>Github Username: {this.props.username} </h3>
        )
    }
}

class Badge extends React.Component {
    render() {
        return (
            <div>
                <Avatar img={this.props.user.img}/>
                <Label name={this.props.user.name}/>
                <GithubUsername username={this.props.user.username}/>
            </div>
        )
    }
}

export default Badge;