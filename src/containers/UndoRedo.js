import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

class UndoRedo extends React.Component {

    render() {

        return (
            <p>
                <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>Rückgängig</button>
                <button onClick={this.props.onRedo} disabled={!this.props.canRedo}>Schritt vorwärts</button>
            </p>
        )
    }

}

const mapStateToProps = (state) => ({
    canUndo: state.goals.past.length > 0,
    canRedo: state.goals.future.length > 0
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo)
