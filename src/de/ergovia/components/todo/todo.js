import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import '../../styles/todo.css';

const styles = theme => ({
    root: theme.mixins.gutters({
        marginTop: theme.spacing.unit * 1,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={4}>
            <div className={'todo'}>
                <ul>
                <li><ToDoExpired /></li>
                <li><ToDoSoon /></li>
                <li><ToDoFuture /></li>
              </ul>
            </div>
        </Paper>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
