import React from 'react'
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';

import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import NotificationIcon from 'material-ui-icons/Notifications';
import FlagIcon from 'material-ui-icons/Flag';
import IconButton from 'material-ui/IconButton';
import moment from 'moment';
import 'moment/locale/de'

import { DateRangePicker } from 'react-dates';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({

    toolbar: {
        backgroundColor: theme.palette.primary[100],
        display: 'grid',
        gridTemplateColumns: '8% 40% 24% 8.5% 12.5%',
        gridTemplateRows: '100%',
        gridTemplateAreas: '"button focus range placeholder reminder"'
    },
    formControlSelect: {
        '&:before': {
            background: 'none'
        }
    },
    content: {
        width: '100%',
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'scroll',
        height: 'calc(100% - 56px)',
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        gridTemplateColumns: '45% 30% 4.5% 12.5%',
        gridTemplateAreas: '"focus range placeholder reminder"',
        marginLeft: 350,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        gridArea: 'button'
    },
    reminderIcon: {
        width: 0,
        height: 0,
        margin: `0 ${theme.spacing.unit * 3}px`,
    },
    focusSelect: {
        gridArea: 'focus',
        paddingRight: '30%'
    },
    focusShift: {
        marginLeft: 25
    },
    rangeFrom: {
        gridArea: 'rangeFrom'
    },
    rangeTo: {
        gridArea: 'rangeTo'
    },
    reminder: {
        gridArea: 'reminder'
    }

});

class ContentToolbar extends React.Component {

    state = {
        focus: 1
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    constructor(props) {
        super(props);
        moment.locale('de');

        this.state = {
            focus: 1,
            startDate: moment(),
            endDate: moment(),
            focuesInput: moment()
        };
        this.data = [
            {id:1, focus: 'Teilnehmergruppe AGH 01', reminder: { warn:4, error: 3} },
            {id:2, focus: 'Teilnehmergruppe AGH 02', reminder: { warn:4, error: 3} },
            {id:3, focus: 'Teilnehmergruppe AGH 03', reminder: { warn:4, error: 3} },
            {id:4, focus: 'Teilnehmergruppe AGH 04', reminder: { warn:4, error: 3} }
        ]

    }


    render() {

        const { classes } = this.props;

        return <Toolbar className={classNames(classes.toolbar, this.props.drawerState && classes.contentShift)}>
            <IconButton color="contrast" aria-label="open drawer" className={classNames(classes.menuButton, this.props.drawerState && classes.hide)}
                        onClick={() => {this.props.handleDrawerOpen()}}>
                <MenuIcon />
            </IconButton>

            <FormControl className={classNames(classes.formControl, classes.focusSelect, this.props.drawerState && classes.focusShift)}>
                <Select className={classes.formControlSelect} displayEmpty value={this.state.focus} onChange={this.handleChange('focus')} input={<Input id="focus-select" />}>
                    <MenuItem value="">
                        <em>Gruppenauswahl</em>
                    </MenuItem>
                    {this.data.map(element => {
                        return <MenuItem key={element.id} value={element.id}>{element.focus}</MenuItem>
                    })}

                </Select>
            </FormControl>
            <DateRangePicker startDate={this.state.startDate}
                             startDatePlaceholderText="von"
                             endDate={this.state.endDate} onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                             endDatePlaceholderText="bis"
                             focusedInput={this.state.focusedInput} onFocusChange={focusedInput => this.setState({ focusedInput })}/>

            <div className={classes.reminder}>
                <IconButton classes={{root: classes.reminderIcon}} disabled={true}><NotificationIcon /></IconButton>
                <IconButton classes={{root: classes.reminderIcon}} disabled={true}><FlagIcon /></IconButton>
            </div>



        </Toolbar>

    }

}

export default withStyles(styles, { withTheme: true })(ContentToolbar)