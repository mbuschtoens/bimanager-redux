import React from 'react'
import moment from 'moment'
import IconButton from 'material-ui/IconButton';
import FlagIcon from 'material-ui-icons/Flag';
import NotificationIcon from 'material-ui-icons/Notifications';


class Participant extends React.Component {

    calculateGoals(goals) {
        return goals.size > 4
    }

    calculateReminder(goals) {
        // zwei Wochen bevor ein Ziel erreicht werden sollte besteht Handlungsbedarf
        return goals.filter(g => moment(g.rangeTo).isSameOrAfter(moment().add(14, 'days')) && !g.completed).length > 0
    }

    render() {

        return <li id={this.props.data.id} onClick={() => {
            this.props.onClick(this.props.data.id)
        }} style={{
            borderBottom: '1px solid gray'
        }}>
            <div>
                <h4 style={{ display: "inline-block" }}>{this.props.data.surname} {this.props.data.lastname}</h4>
                <IconButton disabled={this.calculateGoals(this.props.data.goals)}>
                    <FlagIcon/>
                </IconButton>
                <IconButton disabled={this.calculateReminder(this.props.data.goals)}>
                    <NotificationIcon/>
                </IconButton>
            </div>
        </li>

    }

}

export default Participant