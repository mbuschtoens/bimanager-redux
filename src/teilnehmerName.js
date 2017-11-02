import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    teilnehmerName: {
        textAlign: 'center',
        },
    teilnehmerVorname: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        },
    teilnehmerNachname: {
        fontSize: 20,
        fontWeight: 500,
        },
    });

function TeilnehmerName(props) {
    const { classes } = props;
    return (
        <div className={'teilnehmerName'}>
            <Typography component="p" className={classes.teilnehmerVorname}>
                Klaus <span className={classes.teilnehmerNachname}>Silbereisen</span>
            </Typography>
        </div>
    );
}

TeilnehmerName.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeilnehmerName);