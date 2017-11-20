import React from 'react'
import { connect } from 'react-redux'
import { getGoals, editGoal } from "../actions/actions";
import GoalsList from '../components/GoalsList'
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_GOALS = gql`query getGoals($participant: ID!) {
    allGoals(filter: {
        participant: { id: $participant }
        archive: false
    }) {
        id title text rangeFrom rangeTo completed
    }
}`;

const withGoals = graphql(GET_GOALS, {
    options: (params) => ({variables: { participant: params.participant }}),
    props: ({ ownProps, data: { loading, allGoals, refetch }}) => {
        if (!loading && allGoals.length) {
            ownProps.showGoals(allGoals);
        }
        return {
            goalsLoading: loading,
            goals: allGoals ? allGoals : [],
            goalsRefetch: refetch,
            ...ownProps
        };
    }
});

const mapDispatchToProps = ({
    onClick: editGoal,
    showGoals: getGoals
});

const mapStateTopProps = state => ({
    participant: state.selectedParticipant,
});

export default compose(connect(mapStateTopProps, mapDispatchToProps), withGoals)(GoalsList)