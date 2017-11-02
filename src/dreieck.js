import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    dreieck: {
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderBottom: '20px solid #000',
        margin: 21,
     //   transform: 'rotate(180deg)', geöffnet und geschlossen
    },
});

function Dreieck(props) {
    const { classes } = props;
    return (
        <div className={classes.dreieck}>

        </div>
    );
}

Dreieck.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dreieck);