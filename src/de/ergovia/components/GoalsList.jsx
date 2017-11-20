import React from 'react'
import Goal from './Goal'

class GoalsList extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'goals',
            }
        };

    }

    render() {

        function Button(props) {
            const participant = props.participant;
            if (participant) {
                return <li><button>Hinzufügen</button></li>
            }
            return null;
        }

        return (
            <ul style={this.styles.grid}>
                {this.props.goals.map(goal =>
                    <Goal key={goal.id} {...goal} onClick={() => this.props.onClick(goal.id)} />)}
                <Button participant={this.props.participant}/>
            </ul>

        )
    }

}

export default GoalsList