import React, { Component } from 'react';

class Logger extends Component {
    render() {
        const {children} = this.props;

        return children("The list of movies");
    }
}

export default Logger;