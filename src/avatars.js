import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 50,
        height: 50,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div className={classes.row , 'avatar'}>
            <Avatar
                alt="Adelle Charles"
                src="https://i.pinimg.com/736x/56/b8/f3/56b8f3fe83b7e9cecccadcc8e5923765--nice-face-freckles.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </div>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);