import React from 'react';
import VisibleParticipants from '../containers/VisibleParticipants';
import VisibleGoals from '../containers/VisibleGoals';
import EditGoal from '../containers/EditGoal';
import AddGoal from '../containers/AddGoal';
import AppBar from './AppBar';

import {SHOW_CREATE_FORM, SHOW_EDIT_FORM, SHOW_GOAL_LIST} from "../actions/types";
import { connect } from 'react-redux'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                display: 'grid',
                gridTemplateRows: '100vh',
                gridTemplateColumns: '400px 400px 400px',
                gridTemplateAreas: '"participants goals edit"',
            }

        };
    }

    render() {

        if (this.props.visibleView.type === SHOW_EDIT_FORM) {
            return (
                <div>
                    <AppBar/>
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                        <EditGoal />
                    </div>
                </div>
            );

        } else if (this.props.visibleView.type === SHOW_CREATE_FORM) {
            return (
                <div>
                    <AppBar/>
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                        <AddGoal />
                    </div>
                </div>
            );

        } else if (this.props.visibleView.type === SHOW_GOAL_LIST) {
            return (
                <div>
                    <AppBar/>
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                        <VisibleGoals />
                    </div>
                </div>
            );

        } else {
            return (
                <div>
                    <AppBar/>
                    <div style={this.styles.grid}>
                        <VisibleParticipants />
                    </div>
                </div>
            );
        }

    }
}

const mapStateTopProps = state => ({
    visibleView: state.views
});

export default connect(mapStateTopProps)(App)