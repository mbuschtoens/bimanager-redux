
import React from 'react'
import moment from 'moment'
const fmt = 'DD.MM.YYYY';

class Goal extends React.Component {

    render() {
        return (
            <li style={{
                borderBottom: '1px solid gray'
            }}>
                <div style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }} onClick={this.props.onClick}>
                    <h4 style={{ display: "inline-block" }}>{this.props.title}</h4>
                    <h5 style={{ display: "inline-block", float: 'right' }}>{moment(this.props.rangeTo).format(fmt)}</h5>
                </div>

            </li>
        )

    }

}

export default Goal