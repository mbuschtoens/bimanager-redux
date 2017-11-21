import { connect } from 'react-redux'
import { activateFilter, getGoals, showCreateForm, showEditForm, addGoal, showParticipantList } from "../actions/actions";
import GoalsList from '../components/GoalList'
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag'
import reduce from '../filters/goals';


export const GET_GOALS = gql`query getGoals($participant: ID!, $start: DateTime!, $end: DateTime!) {
    allGoals(orderBy: rangeTo_ASC, filter: {
        participant: { id: $participant }
        archive: false,
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
        id title text rangeFrom rangeTo completed
    }
}`;

const withGoals = graphql(GET_GOALS, {
    options: (params) => ({variables: { participant: params.participant, start: params.range.start, end: params.range.end }}),
    props: ({ ownProps, data: { loading, allGoals, refetch }}) => {
        if (!loading && allGoals.length) {
            ownProps.showGoals(reduce(allGoals, ownProps.activeFilter));
        }
        return {
            goalsLoading: loading,
            goals: allGoals ? reduce(allGoals, ownProps.activeFilter) : [],
            goalsRefetch: refetch,
            ...ownProps
        };
    }
});

const mapDispatchToProps = ({
    onFilterSelect: activateFilter,
    onClose: showParticipantList,
    onCreate: showCreateForm,
    onGoalSelect: showEditForm,
    showGoals: getGoals,
    addGoal
});

const mapStateTopProps = state => ({
    participant: state.views.participant,
    activeFilter: state.filters,
    range: state.range
});

export default compose(connect(mapStateTopProps, mapDispatchToProps), withGoals)(GoalsList)