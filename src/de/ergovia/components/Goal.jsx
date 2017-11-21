import React from 'react'
import moment from 'moment'
const fmt = 'DD.MM.YYYY';

class Goal extends React.Component {

    render() {

        const colorCode = () => {

            if ((moment(this.props.rangeTo).isBefore(moment()) && this.props.completed)) {
                return "#adeb81"
            }

            if (moment(this.props.rangeTo).isBefore(moment()) && !this.props.completed) {
                return "#ff858e"
            }

            if (moment(this.props.rangeTo).isBefore(moment().add(7, "days")) && !this.props.completed) {
                return "#ffd379"
            }

        };

        return (
            <li style={{ borderBottom: '1px solid gray' }}>
                <div style={{ backgroundColor: colorCode() }} onClick={this.props.onClick}>
                    <h4 style={{ display: "inline-block", textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.title}</h4>
                    <h5 style={{ display: "inline-block", float: 'right' }}>{moment(this.props.rangeTo).format(fmt)}</h5>
                </div>

            </li>
        )

    }

}

export default Goal