import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Notifications from 'material-ui-icons/Notifications';

const styles = theme => ({
    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
});

function NotificationsIcon(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton>
                <Badge className={classes.badge} badgeContent={4} color="accent">
                    <Notifications />
                </Badge>
            </IconButton>
        </div>
    );
}

NotificationsIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationsIcon);