import React from 'react'
import Goal from './Goal'
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { FILTER_COMPLETED, FILTER_UNCOMPLETED, FILTER_NONE } from "../actions/types";
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = ({
    hitList: {
        padding: 0,
        listStyle: "none",
    },
    paper: {
        width: "375px",
        margin: "0 auto",
    },
    goalFilter: {
      margin: "10px",
    },
    button: {
        backgroundColor: "#2196f3",
        color: "#ffffff",
        margin: "10px",
    },
});
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
                <Paper className={this.props.classes.paper}>
                    <Select className={this.props.classes.goalFilter} value={this.props.activeFilter} onChange={this.handleChange('onFilterSelect')} input={<Input id="filter" />} >
                        <MenuItem value={FILTER_NONE}>kein Filter</MenuItem>
                        <MenuItem value={FILTER_COMPLETED}>abgeschlossene Ziele</MenuItem>
                        <MenuItem value={FILTER_UNCOMPLETED}>nicht abgeschlossene Ziele</MenuItem>
                    </Select>
                    <IconButton style={{ float: 'right' }} onClick={this.props.onClose}>
                        <CloseIcon/>
                    </IconButton>

                    <ul className={this.props.classes.hitList} style={this.styles.grid}>
                        {this.props.goals.map(goal =>
                            <Goal key={goal.id} {...goal} onClick={() => this.props.onGoalSelect(goal.id, this.props.participant)} />)}
                    </ul>

                    <div style={{textAlign: "right",}}>
                        <Button fab className={this.props.classes.button} onClick={() => {
                            this.props.onCreate(this.props.participant);
                            this.props.addGoal(this.props.participant);
                        }}>
                            <AddIcon />
                        </Button>
                    </div>
                </Paper>
            </div>


        )
    }

}

export default withStyles(styles)(GoalsList)