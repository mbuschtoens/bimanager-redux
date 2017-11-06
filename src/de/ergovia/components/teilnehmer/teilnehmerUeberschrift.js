import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Flag from '../../utils/flagIcon';
import Icons from '../../utils/notificationIcon';
import '../../styles/teilnehmerUeberschrift.css';

function TeilnehmerUeberschrift(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={4}>
            <div className={"content"}>
                <div className={"gruppeHeadlineAppBar"}>
                    <Typography type="caption" component="p">
                        Auswahl
                    </Typography>
                </div>
                <div className={"gruppeAppBar"}>
                    <Typography type="title" component="p" >
                        Teilnehmergruppe BvB 01
                    </Typography>
                </div>
                <div className={"zeitraumHeadlineAppBar"}>
                    <Typography type="caption" component="p" >
                        Zeitraum
                    </Typography>
                </div>
                <div className={"zeitraumAppBar"}>
                    <Typography type="title" component="p" >
                        vom 08.01.2018 bis 30.06.2018
                    </Typography>
                </div>
                <div className={"zieleFristen"}>
                    <div className={"zieleFristenHeadlineAppBar"}>
                        <Typography type="caption" component="p" >
                            Erinnerungen
                        </Typography>
                    </div>
                    <div className={"zieleAppBar"}>
                        <Flag />
                    </div>
                    <div className={"fristAppBar"}>
                        <Icons />
                    </div>
                </div>
            </div>
        </Paper>
    );
}

TeilnehmerUeberschrift.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(TeilnehmerUeberschrift);
