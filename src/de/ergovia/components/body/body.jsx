import React from 'react';

class Body extends React.Component {

    static defaultProps = {
        color: "#FFFFFF"
    };

    componentDidMount() {
        document.body.style.backgroundColor = this.props.color
        document.body.style.margin = 0
        document.body.style.overflow = "hidden"
    }

    componentWillReceiveProps(nextProps) {
        document.body.style.backgroundColor = nextProps.color
        document.body.style.margin = 0
        document.body.style.overflow = "hidden"
    }

    render() {
        return this.props.children
    }

}

export default Body