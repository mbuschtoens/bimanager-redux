import React from 'react'
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const fmt = 'YYYY-MM-DD';

const styles = ({
    paper: {
        width: '375px',
        margin: '0 auto',
        padding: '0px 10px 10px',
    },
    titleLabel: {
        paddingTop: '10px',
    },
    titleInput: {
        display: 'block',
    },
    textField: {
        marginBottom: '10px',
    },

});

class GoalForm extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'edit',
            }
        };
    }

    handleChange = name => (event, checked) => {
        this.props[name](this.props.goal.id, checked);
    };

    handleTextChange = name => event => {
        this.props[name](this.props.goal.id, event.target.value);
    };

    render() {

        const buttonLabel = `Ziel ${this.props.goal.id === 'created' ? 'anlegen' : 'aktualisieren'}`;

        return <div style={this.styles.grid}>
            <Paper className={this.props.classes.paper}>
            <IconButton style={{ float: 'right' }} onClick={() => {this.props.onClose(this.props.participant)}}>
                <CloseIcon/>
            </IconButton>
            <form onSubmit={event => {
                event.preventDefault();
                const goal = {
                    ...this.props.goal,
                    participant: this.props.participant
                };
                this.props.submit(goal);
                this.props.onCreate(this.props.participant);
            }}>

                <TextField className={this.props.classes.textField} fullWidth inputClassName={this.props.classes.titleInput} id="title" label="Titel" onChange={this.handleTextChange('changeTitle')} value={this.props.goal ? this.props.goal.title : ""} InputLabelProps={{shrink: true}}/>
                <TextField className={this.props.classes.textField} fullWidth multiline inputClassName={this.props.classes.titleLabel} id="text" label="Beschreibung" onChange={this.handleTextChange('changeText')} value={this.props.goal ? this.props.goal.text : ""} InputLabelProps={{shrink: true}}/>
                <TextField className={this.props.classes.textField} id="rangeFrom" type="date" label="Von" onChange={this.handleTextChange('changeRangeFrom')} value={this.props.goal ? moment(this.props.goal.rangeFrom).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <TextField className={this.props.classes.textField} id="rangeFrom" type="date" label="Bis" onChange={this.handleTextChange('changeRangeTo')} value={this.props.goal ? moment(this.props.goal.rangeTo).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <Switch checked={this.props.goal ? this.props.goal.completed : false} onChange={this.handleChange('changeCompleted')} aria-label="Ziel erreicht"/>
                <Button raised type="submit">{buttonLabel}</Button>
            </form>
            </Paper>
        </div>


    }

}

export default withStyles(styles)(GoalForm)