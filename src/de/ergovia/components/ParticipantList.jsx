import React from 'react'
import TextField from 'material-ui/TextField';
import Participant from '../components/Participant';
import moment from 'moment'
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const fmt = 'YYYY-MM-DD';
const styles = ({
    entryList: {
      padding: 0,
    },
    paper: {
        width: '375px',
        margin: '0 auto',
        paddingTop: 10,
    },
    datePicker: {
        paddingRight: 14,
        paddingLeft: 14,
    },
    dateInput: {
        fontSize: '0.875rem;',
        fontWeight: 'bold',
    },
    dateLabel: {
        fontSize: '0.875rem;',
    }
});

class ParticipantList extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'participants',
            },
            ul: {
                padding: 0,
            }
        };
    }

    handleChange = name => event => {
        console.log(event.target.value);
        this.props[name](event.target.value);
    };


    render() {
        return (
            <div>
                <Paper className={this.props.classes.paper}>
                    <div className={this.props.classes.datePicker}>
                        <TextField inputClassName={this.props.classes.dateInput} labelClassName={this.props.classes.dateLabel} id="rangeFrom" type="date" label="Von" onChange={this.handleChange('changeRangeStart')} value={moment(this.props.range.start).format(fmt)} InputLabelProps={{shrink: true}}/>
                        <TextField inputClassName={this.props.classes.dateInput} labelClassName={this.props.classes.dateLabel} id="rangeFrom" type="date" label="Bis" onChange={this.handleChange('changeRangeEnd')} value={moment(this.props.range.end).format(fmt)} InputLabelProps={{shrink: true}}/>
                    </div>
                    <ul className={this.props.classes.entryList} style={this.styles}>
                        {this.props.participants.map(p => <Participant key={p.id} data={p} onClick={this.props.onClick}/>)}
                    </ul>
                </Paper>
            </div>


        )
    }

}

export default withStyles(styles)(ParticipantList)