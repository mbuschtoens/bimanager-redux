import React from 'react'
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import { ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({

    row: {
        color: 'inherit',
        display: 'block',
        fontSize: '0.8125rem',
        lineHeight: '4em',
        padding: '0 0 0 125px'
    },
    rowShift: {
        paddingLeft: 50
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
    range: {
        gridArea: 'range'
    },
    rangeText: {
        display: 'inline-block',
        paddingRight: '5px',
    },
    reminder: {
        gridArea: 'reminder'
    },
    badge: {
        margin: `0 ${theme.spacing.unit * 3}px`,
    },
    badgeWarnColor: {
        backgroundColor: theme.palette.warn[300]
    },
    badgeErrorColor: {
        backgroundColor: theme.palette.error[300]
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '44% 24% 10% 13% 9%',
        gridTemplateRows: '100%',
        gridTemplateAreas: '"focus range placeholder reminder dropdown"'
    }

});

class ContentListItem extends React.Component {


    render() {

        const { classes } = this.props;

        return <ListItem button divider onClick={() => {this.props.handleDetailOpen(this.props.element.focus)}}
                         className={classNames(classes.row, this.props.drawerState && classes.rowShift)} key={this.props.element.id}>
            <div className={classes.grid}>

                <div className={classes.focusSelect}>
                    <Typography classes={{root: classes.focusVorname}}>
                        {this.props.element.focus.vorname}
                    </Typography>
                    <Typography classes={{root: classes.focusNachname}}>
                        {this.props.element.focus.nachname}
                    </Typography>
                </div>

                <div className={classes.range}>
                    <Typography classes={{root: classes.rangeText}}>
                        {this.props.element.range}
                    </Typography>
                </div>

                <div className={classes.reminder}>
                    <Badge className={classes.badge} classes={{colorAccent: classes.badgeWarnColor}} badgeContent={this.props.element.reminder.warn} color="accent" />
                    <Badge className={classes.badge} classes={{colorAccent: classes.badgeErrorColor}} badgeContent={this.props.element.reminder.error} color="accent" />
                </div>
            </div>
        </ListItem>

    }

}

export default withStyles(styles, {withTheme: true})(ContentListItem)