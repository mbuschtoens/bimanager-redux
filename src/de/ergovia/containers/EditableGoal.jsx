import React from 'react'
import {editGoal, editGoalCompletedChanged, editGoalRangeFromChanged, editGoalRangeToChanged, editGoalTextChanged, editGoalTitleChanged} from "../actions/actions";
import {connect} from 'react-redux'
import {compose, graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import {GET_GOALS} from '../containers/VisibleGoals';

const fmt = 'YYYY-MM-DD';


const CREATE_GOAL = gql`
    mutation updateGoal($id: ID!, $title: String!, $text: String!, $rangeFrom: DateTime, $rangeTo: DateTime, $completed: Boolean!) {
        updateGoal(
            id: $id,
            title: $title,
            text: $text,
            rangeFrom: $rangeFrom,
            rangeTo: $rangeTo,
            completed: $completed
        ) {
            title
            text
            participant {
                surname lastname
            }
        }
    }`;

const withGoalCreation = graphql(CREATE_GOAL, {

    props: ({ownProps, mutate}) => ({
        submit: ({id, title, text, rangeFrom, rangeTo, completed, participant}) => {
            return mutate({
                variables: {
                    id, title, text, rangeFrom, rangeTo, completed, participant
                },
                refetchQueries: [{query: GET_GOALS, variables: {participant}}]
            });
        }
    })

});


class EditableGoal extends React.Component {

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

        return <div style={this.styles.grid}>
            <form onSubmit={event => {
                event.preventDefault();
                const goal = {
                    ...this.props.goal,
                    participant: this.props.participant
                };
                console.log(goal);
                console.log(this.props.participant);
                this.props.submit(goal);
                this.props.onClick(this.props.participant);
            }}>

                <TextField id="title" label="Titel" onChange={this.handleTextChange('changeTitle')} value={this.props.goal ? this.props.goal.title : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="text" label="Beschreibung" onChange={this.handleTextChange('changeText')} value={this.props.goal ? this.props.goal.text : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="rangeFrom" type="date" label="Von" onChange={this.handleTextChange('changeRangeFrom')} value={this.props.goal ? moment(this.props.goal.rangeFrom).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <TextField id="rangeFrom" type="date" label="Bis" onChange={this.handleTextChange('changeRangeTo')} value={this.props.goal ? moment(this.props.goal.rangeTo).format(fmt) : ""} InputLabelProps={{shrink: true}}/>
                <Switch checked={this.props.goal ? this.props.goal.completed : false} onChange={this.handleChange('changeCompleted')} aria-label="Ziel erreicht"/>
                <button type="submit">Ziel aktualisieren</button>
            </form>
        </div>

    }

}

const mapDispatchToProps = ({
    onClick: editGoal,
    changeTitle: editGoalTitleChanged,
    changeText: editGoalTextChanged,
    changeRangeFrom: editGoalRangeFromChanged,
    changeRangeTo: editGoalRangeToChanged,
    changeCompleted: editGoalCompletedChanged
});

const mapStateTopProps = state => ({
    participant: state.selectedParticipant,
    goal: state.goals.filter(g => g.id === state.editGoal)[0]
});

export default compose(connect(mapStateTopProps, mapDispatchToProps), withGoalCreation)(EditableGoal)
