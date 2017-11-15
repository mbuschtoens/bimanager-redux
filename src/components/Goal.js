import React from 'react'
import moment from 'moment'
const fmt = 'DD.MM.YYYY';

class Goal extends React.Component {

    render() {

        return (
            <li style={{
                display: this.props.archive ? 'none' : 'block',
                borderBottom: '1px solid gray'
            }}>
                <div style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }} onClick={this.props.onClick}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                    <h5>Range: {moment(this.props.rangeFrom).format(fmt)} - {moment(this.props.rangeTo).format(fmt)}</h5>
                    <h5>Deadline: {moment(this.props.deadline).format(fmt)}</h5>
                </div>
                <button onClick={this.props.onRemove}>delete</button>

            </li>
        )

    }

}

export default Goal