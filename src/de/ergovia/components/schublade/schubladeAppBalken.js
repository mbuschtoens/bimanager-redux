import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import PaperSheet from '../teilnehmer/hintergrundPapier';
import TeilnehmerUeberschrift from '../teilnehmer/teilnehmerUeberschrift';
import '../../styles/schublade.css';
import Flag from '../../utils/flagIcon';
import Cloche from '../../utils/notificationIcon';

const drawerWidth = 360;

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class PersistentDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const AppBarColor = {
            backgroundColor: '#003c8f'
        };
        const styles = {
            color: '#FFF'
        };
        return (
                <div className={classes.root}>
                    <div className={classes.appFrame}>

                            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)} style={AppBarColor}>
                                <Toolbar disableGutters={!this.state.open}>
                                    <IconButton
                                        color="contrast"
                                        aria-label="open drawer"
                                        onClick={this.handleDrawerOpen}
                                        className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography type="title" component="p" style={styles}>
                                        Bildungsmanager
                                    </Typography>


                                </Toolbar>
                            </AppBar>

                        <Drawer
                            type="persistent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            open={this.state.open}
                        >
                            <div className={classes.drawerInner}>
                                <div className={'schubladenLeiste'}>
                                    <div className={classNames('schubGruppe' , 'schubNav')}>Gruppen</div>
                                    <div className={classNames('schubTeilnehmer' , 'schubNav')}>Teilnehmer</div>
                                    <div className={classNames('schubFlag' , 'schubIcons')}><Flag /></div>
                                    <div className={classNames('schubCloche' , 'schubIcons')}><Cloche /></div>
                                    <div className={classNames(classes.drawerHeader , 'schubMenue')}>
                                        <IconButton onClick={this.handleDrawerClose}>
                                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                        </IconButton>
                                    </div>
                                </div>
                                <Divider />
                                <Divider />
                            </div>
                        </Drawer>
                        <main className={classNames(classes.content, this.state.open && classes.contentShift)}>
                            <TeilnehmerUeberschrift />
                            <PaperSheet />
                            <PaperSheet />
                            <PaperSheet />
                        </main>
                    </div>
                </div>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);