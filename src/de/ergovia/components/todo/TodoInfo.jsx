import React from 'react'
import {withStyles} from 'material-ui/styles';
import TodoCard from './TodoCard'

const styles = themes => ({

});

class TodoInfo extends React.Component {

    render() {
        return <TodoCard title="zukünftige Ziele"/>
    }

}

export default withStyles({withTheme: true})(TodoInfo)