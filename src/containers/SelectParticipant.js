import React from 'react'
import { connect } from 'react-redux'
import { selectParticipant } from '../actions/actions'

class SelectParticipant extends React.Component {

    render() {
        return (
            <label>Participant:
                <select onChange={(event) => this.props.onSelect(event.target.value)}>
                    {this.props.data.map(p => <option key={p.id} value={p.id}>{p.surname} {p.lastname}</option>)}
                </select>
            </label>

        );

    }

}


const mapDispatchToProps = ({
   onSelect: selectParticipant
});

const mapStateToProps = state => ({
   data: [
       {id:1, surname: 'Jane', lastname: 'Doe', goals: []},
       {id:2, surname: 'John', lastname: 'Doe', goals: []},
       {id:3, surname: 'Erika', lastname: 'Mustermann', goals: []},
       {id:4, surname: 'Peter', lastname: 'Goge', goals: []}
   ]
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectParticipant)