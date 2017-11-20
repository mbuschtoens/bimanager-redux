import React from 'react';
import VisibleParticipants from '../containers/VisibleParticipants';
import VisibleGoals from '../containers/VisibleGoals';
import EditableGoal from '../containers/EditableGoal';
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

        if (this.props.editMode) {
            return (
                <div style={this.styles.grid}>
                    <VisibleParticipants />
                    <VisibleGoals />
                    <EditableGoal />
                </div>

            );

        } else {
            return (
                <div style={this.styles.grid}>
                    <VisibleParticipants />
                    <VisibleGoals />
                </div>

            );
        }


    }
}

const mapStateTopProps = state => ({
    editMode: !!state.editGoal,
});

export default connect(mapStateTopProps)(App)