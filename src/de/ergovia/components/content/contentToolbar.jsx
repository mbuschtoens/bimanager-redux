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
        gridTemplateColumns: '6% 47% 47%',
        gridTemplateRows: '100%',
        gridTemplateAreas: '"placeholder focus range"'
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
        focus: ""
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});

        const group = this.props.data.find(group => group.id === event.target.value);

        this.props.onChange(group ? group.participants : []);
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

    }


    render() {

        const { classes } = this.props;

        return <Toolbar disableGutters className={classNames(classes.toolbar)}>

            <FormControl className={classNames(classes.formControl, classes.focusSelect)}>
                <Select className={classes.formControlSelect} displayEmpty value={this.state.focus} onChange={this.handleChange('focus')} input={<Input id="focus-select" />}>
                    {this.props.data.map(element => {
                        return <MenuItem key={element.id} value={element.id}>{element.group.name}</MenuItem>
                    })}

                </Select>
            </FormControl>
            <DateRangePicker startDate={this.state.startDate}
                             startDatePlaceholderText="von"
                             endDate={this.state.endDate} onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                             endDatePlaceholderText="bis"
                             focusedInput={this.state.focusedInput} onFocusChange={focusedInput => this.setState({ focusedInput })}/>

        </Toolbar>

    }

}

export default withStyles(styles, { withTheme: true })(ContentToolbar)