import React from 'react'
import AddGoal from '../containers/AddGoal'
import VisibileGoals from '../containers/VisibleGoals'
import UndoRedo from '../containers/UndoRedo'

class App extends React.Component {

    render() {

        return (
            <div>
                <AddGoal />
                <VisibileGoals />
                <UndoRedo />
            </div>
        )

    }

}

export default App
