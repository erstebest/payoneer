import React from 'react';

export class ErrorsHandler extends React.Component {
    componentDidCatch(error, info) {
        const { message } = error;
        const { componentStack } = info;
        console.log(message, componentStack);
        //errors handler implementation
    }

    render() {
        return this.props.children;
    }
}
