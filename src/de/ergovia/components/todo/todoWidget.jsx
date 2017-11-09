import React from 'react'
import { withStyles } from 'material-ui/styles';
import TodoError from './TodoError'
import TodoWarn from './TodoWarn'
import TodoInfo from './TodoInfo'

const styles = themes => ({

    frame: {
        gridArea: 'todo'
    }

});

class TodoWidget extends React.Component {

    render() {

        const { classes } = this.props;

        return <div className={classes.frame}>
            <TodoError/>
            <TodoWarn/>
            <TodoInfo/>
        </div>
    }

}

export default withStyles(styles, { withTheme: true })(TodoWidget)