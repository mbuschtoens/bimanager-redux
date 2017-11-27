import { connect } from 'react-redux'
import { showGoalList, changeDateRangeStart, changeDateRangeEnd } from '../actions/actions';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ParticipantList from '../components/ParticipantList';

export const GET_PARTICIPANTS = gql`    
    query getParticipantsWithGoalsInRange($start: LocalDate!, $end: LocalDate!) {
        alleTeilnehmer(anfang: $start, ende: $end) {
            id vorname nachname ziele {
                id anfang ende zielerreicht
            }
        }
    }
`;

const withParticipants = graphql(GET_PARTICIPANTS, {
    options: (params) => ({ variables: { start: params.range.start, end: params.range.end } }),
    props: ({ ownProps, data}) => {

        if (data.loading) return { participantsLoading: true, participants: [] } ;
        if (data.error) return { hasErrors: true, participants: [] };

        return {
            participants: data.alleTeilnehmer,
            refetchParticipants: data.refetch,
            ...ownProps
        }

    }

});

const mapDispatchToProps = {
    onClick: showGoalList,
    changeRangeStart: changeDateRangeStart,
    changeRangeEnd: changeDateRangeEnd
};

const mapStateTopProps = state => ({
    range: state.range
});

export default compose(connect(mapStateTopProps, mapDispatchToProps), withParticipants)(ParticipantList)