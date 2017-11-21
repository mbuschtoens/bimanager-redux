import React from 'react'
import Goal from './Goal'
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FILTER_COMPLETED, FILTER_UNCOMPLETED, FILTER_NONE } from "../actions/types";

class GoalsList extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'goals',
            }
        };

    }

    handleChange = name => event => {
        this.props[name](event.target.value);
    };


    render() {

        return (
            <div>
                <Select value={this.props.activeFilter} onChange={this.handleChange('onFilterSelect')} input={<Input id="filter" />} >
                    <MenuItem value={FILTER_NONE}>kein Filter</MenuItem>
                    <MenuItem value={FILTER_COMPLETED}>abgeschlossene Ziele</MenuItem>
                    <MenuItem value={FILTER_UNCOMPLETED}>nicht abgeschlossene Ziele</MenuItem>
                </Select>
                <IconButton style={{ float: 'right' }} onClick={this.props.onClose}>
                    <CloseIcon/>
                </IconButton>
                <ul style={this.styles.grid}>
                    {this.props.goals.map(goal =>
                        <Goal key={goal.id} {...goal} onClick={() => this.props.onGoalSelect(goal.id, this.props.participant)} />)}
                </ul>
                <button style={{ float: 'right' }} onClick={() => {
                    this.props.onCreate(this.props.participant);
                    this.props.addGoal(this.props.participant);
                }}>Hinzufügen</button>
            </div>


        )
    }

}

export default GoalsList