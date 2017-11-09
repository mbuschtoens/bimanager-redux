import React from 'react'
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import { ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({

    row: {
        color: 'inherit',
        display: 'block',
        fontSize: '0.8125rem',
        lineHeight: '4em',
        padding: '0'
    },
    focusVorname: {
        display: 'inline-block',
        paddingRight: '5px'
    },
    focusNachname: {
        display: 'inline-block',
        paddingRight: '5px',
        fontWeight: 'bold'
    },
    focusSelect: {
        gridArea: 'focus',
        paddingRight: '55%'
    },
    reminder: {
        gridArea: 'reminder',
        padding: '0 20%'
    },
    badge: {
        float: 'left',
        margin: `${theme.spacing.unit}px`,
    },
    badgeOkColor: {
        backgroundColor: theme.palette.secondary[400]
    },
    badgeWarnColor: {
        backgroundColor: theme.palette.warn[300]
    },
    badgeErrorColor: {
        backgroundColor: theme.palette.error[300]
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '6% 47% 47%',
        gridTemplateRows: '100%',
        gridTemplateAreas: '"placeholder focus reminder"'
    }

});

class ContentListItem extends React.Component {


    render() {

        const { classes } = this.props;

        return <ListItem button divider onClick={() => {this.props.handleDetailOpen(this.props.element.focus)}}
                         className={classNames(classes.row)} key={this.props.element.id}>
            <div className={classes.grid}>

                <div className={classes.focusSelect}>
                    <Typography classes={{root: classes.focusVorname}}>
                        {this.props.element.focus.vorname}
                    </Typography>
                    <Typography classes={{root: classes.focusNachname}}>
                        {this.props.element.focus.nachname}
                    </Typography>
                </div>


                <div className={classes.reminder}>
                    <Chip className={classes.badge} classes={{root: classes.badgeOkColor}} label={this.props.element.reminder.ok} />
                    <Chip className={classes.badge} classes={{root: classes.badgeWarnColor}} label={this.props.element.reminder.warn} />
                    <Chip className={classes.badge} classes={{root: classes.badgeErrorColor}} label={this.props.element.reminder.error} />
                </div>
            </div>
        </ListItem>

    }

}

export default withStyles(styles, {withTheme: true})(ContentListItem)