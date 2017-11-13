import React from 'react'

class Goal extends React.Component {

    render() {

        return (
            <li style={{display: this.props.archive ? 'none' : 'block'}}>
                <div style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }} onClick={this.props.onClick}>{this.props.title} -> {this.props.text}</div>
                <button onClick={this.props.onRemove}>Löschen</button>
            </li>
        )

    }

}

export default Goal