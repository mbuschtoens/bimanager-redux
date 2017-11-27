import React from 'react'
import moment from 'moment'
import IconButton from 'material-ui/IconButton';
import FlagIcon from 'material-ui-icons/Flag';
import NotificationIcon from 'material-ui-icons/Notifications';


class Participant extends React.Component {

    calculateGoals(goals) {
        return goals.length >= 5
    }

    calculateReminder(goals) {
        // zwei Wochen bevor ein Ziel erreicht werden sollte besteht Handlungsbedarf
        return goals.filter(g => {
            if (moment(g.anfang).isBefore(moment().add(7, 'days'))) {
                return !g.zielerreicht;
            }
            if (moment(g.ende).isAfter(moment().add(7, 'days'))) {
                return false;
            }
            return false;

        })
    }

    render() {

        const countReminder = this.calculateReminder(this.props.data.ziele).length,
            noActionNeeded = countReminder  === 0,
            goalCount = this.props.data.ziele.length >= 5 ? "(/)" : `(${this.props.data.ziele.length}/5)`;

        return <li id={this.props.data.id} onClick={() => {
            this.props.onClick(this.props.data.id)
        }} style={{
            borderBottom: '1px solid gray'
        }}>
            <div>
                <h4 style={{ display: "inline-block" }}>{this.props.data.vorname} {this.props.data.nachname}</h4>
                <IconButton disabled={this.calculateGoals(this.props.data.ziele)}>
                    <FlagIcon/>
                </IconButton>
                {goalCount}
                <IconButton disabled={noActionNeeded}>
                    <NotificationIcon/>
                </IconButton>
                ({countReminder})
            </div>
        </li>

    }

}

export default Participant