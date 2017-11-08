import React from 'react'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({

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
        width: 'calc(100% - 350px)',
        marginLeft: 350,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },

});

class ContentToolbar extends React.Component {


    constructor(props) {
        super(props);

        this.styles = {
            toolbar: {
                backgroundColor: 'red'
            }
        }

    }


    render() {

        const { classes } = this.props;

        return <Toolbar style={this.styles.toolbar}>
            <IconButton color="contrast" aria-label="open drawer" className={classNames(classes.menuButton, this.props.drawerState && classes.hide)}
                        onClick={() => {this.props.handleDrawerOpen()}}>
                <MenuIcon />
            </IconButton>
        </Toolbar>

    }

}

export default withStyles(styles, { withTheme: true })(ContentToolbar)