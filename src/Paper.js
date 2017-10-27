import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ImageAvatars from './avatars';
import TeilnehmerName from './teilnehmerName';
import TeilnehmerFrist from './teilnehmerFrist';
import Dreieck from './dreieck';

import './teilnehmer.css';

const styles = theme => ({
    root: theme.mixins.gutters({
        marginTop: theme.spacing.unit * 3,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={4}>
            <div className={'teilnehmer'}>
                <ImageAvatars/>
                <TeilnehmerName />
                <div className={'teilnehmerZiele'}></div>
                <TeilnehmerFrist />
                <Dreieck />
            </div>
        </Paper>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);