import React from 'react'
import {withStyles} from 'material-ui/styles';
import TodoCard from './TodoCard'

const styles = themes => ({

});

class TodoError extends React.Component {

    render() {
        return <TodoCard title="überfällige Ziele"/>
    }

}

export default withStyles({withTheme: true})(TodoError)