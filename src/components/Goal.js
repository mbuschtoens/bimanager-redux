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
                    <p>{this.props.title} -> {this.props.text} deadline: {moment(this.props.deadline).format(fmt)}</p>
                    <p>({this.props.range.from.format(fmt)} - {this.props.range.to.format(fmt)})</p>
                </div>

                <button onClick={this.props.onRemove}>delete</button>
            </li>
        )

    }

}

export default Goal