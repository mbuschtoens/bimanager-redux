import React from 'react'
import { connect, dispatch } from 'react-redux'
import { getParticipants, selectParticipant } from '../actions/actions';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Participant from '../components/Participant';

export const GET_PARTICIPANTS = gql`query getParticipants {
    allParticipants {
        id surname lastname goals {
            id rangeTo
        }
    }
}`;

const withParticipants = graphql(GET_PARTICIPANTS, {

    props: ({ ownProps, data}) => {

        if (data.loading) return { participantsLoading: true, participants: [] } ;
        if (data.error) return { hasErrors: true, participants: [] };

        return {
            participants: data.allParticipants,
            refetchParticipants: data.refetch,
            ...ownProps
        }

    }

});

class VisibleParticipants extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'participants',
            }
        };
    }


    render() {
        return (
            <ul style={this.styles}>
                {this.props.participants.map(p => <Participant key={p.id} data={p} onClick={this.props.onSelect}/>)}
            </ul>

        )
    }

}

const mapDispatchToProps = {
    onSelect: selectParticipant,
    showParticipants: getParticipants
};

const mapStateTopProps = state => ({});

export default compose(connect(mapStateTopProps, mapDispatchToProps), withParticipants)(VisibleParticipants)