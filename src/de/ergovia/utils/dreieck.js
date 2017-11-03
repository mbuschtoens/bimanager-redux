import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
        expand: {
            textAlign: 'center',
            fontSize: 40,
        },
        iconButton: {
            margin: 15,
        }
});

function ExpandMoreIcon(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton className={classes.iconButton} >
                <ExpandMore className={classes.expand} />
            </IconButton>
        </div>
    );
}

ExpandMoreIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpandMoreIcon);