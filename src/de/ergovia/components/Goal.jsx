import React from 'react'
import moment from 'moment'
import Typography from 'material-ui/Typography';

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
            <li>
                <div style={{ backgroundColor: colorCode() }} onClick={this.props.onClick}>
                    <Typography style={{ display: "inline-block", padding: "14px", textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.title}</Typography>
                    <Typography style={{ display: "inline-block", padding: "14px", float: 'right' }}>{moment(this.props.rangeTo).format(fmt)}</Typography>
                </div>

            </li>
        )

    }

}

export default Goal