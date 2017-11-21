import { connect } from 'react-redux'
import { showGoalList, changeDateRangeStart, changeDateRangeEnd } from '../actions/actions';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ParticipantList from '../components/ParticipantList';

export const GET_PARTICIPANTS = gql`
    query getParticipantsWithGoalsInRange($start: DateTime!, $end: DateTime!) {
        allParticipants {
            id surname lastname goals(filter: {
                OR: [{
                    rangeFrom_gte: $start
                    rangeTo_lte: $end
                },{
                    AND:[{
                        rangeFrom_gte: $start
                        rangeTo_gte: $end
                    }, {
                        rangeFrom_lte: $end
                    }]
                },{
                    AND: [{
                        rangeFrom_lte: $start
                        rangeTo_lte: $end
                    } , {
                        rangeTo_gte: $start
                    }]

                },{
                    rangeFrom_lte: $start
                    rangeTo_gte: $end
                }]

            }) {
                id rangeFrom rangeTo completed
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
            participants: data.allParticipants,
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