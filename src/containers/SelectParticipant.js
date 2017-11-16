import React from 'react'
import { connect } from 'react-redux'
import { selectParticipant, getGoals } from '../actions/actions'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_ALL_PARTICIPANTS = gql`query getParticipants {
    allParticipants { id surname lastname goals { id title text rangeFrom rangeTo completed archive } }
}`;

const withParticipants = graphql(GET_ALL_PARTICIPANTS, {
    props: ({ ownProps, data }) => {
        if (data.loading) return { participantsLoading: true, participants: [] } ;
        if (data.error) return { hasErrors: true, participants: [] };
        return {
            participants: data.allParticipants,
            refetchParticipants: data.refetch,
            ...ownProps
        }
    }
});

class SelectParticipant extends React.Component {

    render() {
        return (
            <label>Participant:
                <select onChange={(event) => {
                    const pt = this.props.participants.filter(p => p.id === event.target.value)[0];

                    this.props.onSelect(pt ? pt : {});
                    this.props.getGoals(pt ? pt.goals : []);

                }}>
                    <option key="">---</option>
                    {this.props.participants.map(p => <option key={p.id} value={p.id}>{p.surname} {p.lastname}</option>)}
                </select>
            </label>

        );

    }

}


const mapDispatchToProps = {
    onSelect: selectParticipant,
    getGoals: getGoals
};

const mapStateToProps = state => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps), withParticipants)(SelectParticipant)