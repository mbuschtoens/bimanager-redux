import React from 'react'
import Goal from './Goal'

class GoalsList extends React.Component {

    render() {

        return (
            <ul>
                {this.props.data.map(goal =>
                    <Goal key={goal.id} {...goal} onClick={() => this.props.onClick(goal.id)}
                          onRemove={() => this.props.onRemove(goal.id)}/>)}
            </ul>

        )
    }

}

export default GoalsList
