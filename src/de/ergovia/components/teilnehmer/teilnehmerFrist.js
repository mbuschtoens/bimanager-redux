import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

const styles = theme => ({
    fristenUeberschrift: {
        textAlign: 'center',
        paddingTop: 2,
        background: '#f1e6dc',
        fontSize: 13,
        fontWeight: 600,
    },
    customBadge: {
        fontSize: 15,
        background: '#f39200',
        borderRadius: '50%',
        display: 'inline-block',
        width: 20,
        height: 20,
        color: '#fff',
        padding: 3,
        lineHeight: '20px',
    },
    frist: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    orange: {
        background: '#f39200',
    },
    red: {
        background: '#be1622',
    }
});

function TeilnehmerFrist(props) {
    const { classes } = props;
    return (
        <div className={'teilnehmerFrist'}>
            <div className={'header'}>
                <Typography component="p" className={classes.fristenUeberschrift}>
                    Fristen
                </Typography>
            </div>
            <div className={classNames(classes.frist, 'frist')}>
                <span className={classNames(classes.customBadge,classes.orange)} >5</span>
            </div>
            <div className={classNames(classes.frist, 'ziele')}>
                <span className={classNames(classes.customBadge, classes.red)}>10</span>
            </div>

        </div>
    );
}

TeilnehmerFrist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeilnehmerFrist);