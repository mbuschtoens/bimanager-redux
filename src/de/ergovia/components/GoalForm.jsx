import React from 'react'
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import moment from 'moment';
const fmt = 'YYYY-MM-DD';

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

                <TextField id="title" label="Titel" onChange={this.handleTextChange('changeTitle')} value={this.props.goal ? this.props.goal.title : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="text" label="Beschreibung" onChange={this.handleTextChange('changeText')} value={this.props.goal ? this.props.goal.text : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="rangeFrom" type="date" label="Von" onChange={this.handleTextChange('changeRangeFrom')} value={this.props.goal ? moment(this.props.goal.rangeFrom).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="rangeFrom" type="date" label="Bis" onChange={this.handleTextChange('changeRangeTo')} value={this.props.goal ? moment(this.props.goal.rangeTo).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <Switch checked={this.props.goal ? this.props.goal.completed : false} onChange={this.handleChange('changeCompleted')} aria-label="Ziel erreicht"/>
                <button type="submit">{buttonLabel}</button>
            </form>
        </div>


    }

}

export default GoalForm