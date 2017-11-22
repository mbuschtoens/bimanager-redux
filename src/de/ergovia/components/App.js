import React from 'react';
import VisibleParticipants from '../containers/VisibleParticipants';
import VisibleGoals from '../containers/VisibleGoals';
import EditGoal from '../containers/EditGoal';
import AddGoal from '../containers/AddGoal';
import Authenticator from '../containers/Authenticator'

import {SHOW_CREATE_FORM, SHOW_EDIT_FORM, SHOW_GOAL_LIST} from "../actions/types";
import { connect } from 'react-redux'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                display: 'grid',
                gridTemplateRows: '100vh',
                gridTemplateColumns: '33% 33% 33%',
                gridTemplateAreas: '"participants goals edit"',
            }

        };
    }


    render() {

        return <Authenticator content={() => {

            if (this.props.visibleView.type === SHOW_EDIT_FORM) {
                return (
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                        <EditGoal />
                    </div>

                );

            } else if (this.props.visibleView.type === SHOW_CREATE_FORM) {
                return (
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                        <AddGoal />
                    </div>

                );

            } else if (this.props.visibleView.type === SHOW_GOAL_LIST) {
                return (
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                    </div>

                );

            } else {
                return (
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                    </div>

                );
            }

        }}/>




    }
}

const mapStateTopProps = state => ({
    visibleView: state.views
});

export default connect(mapStateTopProps)(App)