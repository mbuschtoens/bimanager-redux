import React from 'react'
import moment from 'moment'
import IconButton from 'material-ui/IconButton';
import Flag from 'mdi-material-ui/FlagCheckered';
import NotificationIcon from 'material-ui-icons/Notifications';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
    part: {
        display: "inline-block",
    },
    area: {
        display: "grid",
        gridTemplateRows: "100%",
        gridTemplateColumns: "275px 48px 48px",
        gridTemplateAreas: '"Name Target Notification"',
        cursor: "pointer",
        '&:hover': {
            background: "#dddddd",
        },
    },

    name: {
        gridArea: "Name",
        padding: "14px",
        fontWeight: "bold",
    },
    target: {
        gridArea: "Target",
    },
    notification: {
        gridArea: "Notification",
    },

};
class Participant extends React.Component {

    calculateGoals(goals) {
        return goals.length >= 5
    }

    calculateReminder(goals) {
        // zwei Wochen bevor ein Ziel erreicht werden sollte besteht Handlungsbedarf
        return goals.filter(g => {
            if (moment(g.rangeTo).isBefore(moment().add(7, 'days'))) {
                return !g.completed;
            }
            if (moment(g.rangeTo).isAfter(moment().add(7, 'days'))) {
                return false;
            }
            return false;

        })
    }

    render() {

        const countReminder = this.calculateReminder(this.props.data.goals).length,
            noActionNeeded = countReminder  === 0,
            goalCount = this.props.data.goals.length >= 5 ? "(/)" : `(${this.props.data.goals.length}/5)`;

        return <li id={this.props.data.id} onClick={() => {
                this.props.onClick(this.props.data.id)
            }} style={{
                listStyle: "none",
            }}>
                <div className={this.props.classes.area}>
                    <Typography className={this.props.classes.name}>{this.props.data.surname} {this.props.data.lastname}</Typography>
                    <div className={this.props.classes.target}>
                        <IconButton className={this.props.classes.part} disabled={this.calculateGoals(this.props.data.goals)}>
                            <Flag/>
                        </IconButton>
                        {/* <Typography className={this.props.classes.part} >{goalCount}</Typography> */}
                    </div>
                    <div className={this.props.classes.notification}>
                        <IconButton className={this.props.classes.part} disabled={noActionNeeded}>
                        <NotificationIcon className={this.props.classes.part} />
                        </IconButton>
                        {/* <Typography className={this.props.classes.part} >({countReminder})</Typography> */}
                    </div>
                </div>
            </li>

    }

}


export default withStyles(styles)(Participant)