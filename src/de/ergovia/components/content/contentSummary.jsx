import React from 'react';
import Paper from 'material-ui/Paper'
import Table, {
    TableBody,
    TableCell,
    TableRow
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import ContextDrawer from './contextDrawer'
import ContentToolbar from './contentToolbar'

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
    tableCellFocus: {
        padding: '4px 0px 4px 100px'
    },
    tableCellFocusVorname: {
        display: 'inline-block',
        paddingRight: '5px'
    },
    tableCellFocusNachname: {
        display: 'inline-block',
        paddingRight: '5px',
        fontWeight: 'bold'
    },
    tableCellRange: {
        padding: '4px 0 4px 0'
    },
    tableCellReminder: {
        padding: 4
    }
});

class ContentSummary extends React.Component {


    constructor(props) {
        super(props);
        this.state = {drawer: false};
        this.styles = {
            frame: {
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '100%',
            },
            paper: {
                margin: 100,
                height: "80vh",
                width: "70vw",
                overflow: "hidden",
                position: 'relative'
            }
        };

        this.data = [
            {id: 1, focus: {vorname: "Stefan", nachname: "Dittmann"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 1, error: 2}},
            {id: 2, focus: {vorname: "Matthis", nachname: "Buschtöns"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 3}},
            {id: 3, focus: {vorname: "Merle", nachname: "Ehm"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 3, error: 0}},
            {id: 4, focus: {vorname: "Jan", nachname: "Hansen"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 1, error: 0}},
            {id: 5, focus: {vorname: "Theresa", nachname: "Lill"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 1, error: 2}},
            {id: 6, focus: {vorname: "Adrian", nachname: "Cremer"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 0}},
            {id: 7, focus: {vorname: "Kristina", nachname: "Orth"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 5, error: 0}},
            {id: 8, focus: {vorname: "Michael", nachname: "Hanse"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 1, error: 1}},
            {id: 9, focus: {vorname: "Jan-Philipp", nachname: "Rathje"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 2, error: 3}},
            {id: 10, focus: {vorname: "Ralf", nachname: "Kohlgrüber"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}}


        ];
    }

    handleDrawerOpen = () => {
        this.setState({ drawer: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawer: false });
    };

    render() {

        const { classes } = this.props;

        return (
            <div style={this.styles.frame}>
                <Paper style={this.styles.paper} position="fixed">
                        <ContentToolbar drawerState={this.state.drawer} handleDrawerOpen={() => {this.handleDrawerOpen()}}/>
                        <ContextDrawer drawerState={this.state.drawer} handleDrawerClose={() => {this.handleDrawerClose()}}/>
                        <div className={classNames(classes.content, this.state.drawer && classes.contentShift)}>
                            <Table>
                                <TableBody>

                                    {this.data.map((element) => {

                                        return <TableRow key={element.id}>
                                            <TableCell classes={{paddingDefault: classes.tableCellFocus}}>
                                                <Typography classes={{root: classes.tableCellFocusVorname}}>
                                                    {element.focus.vorname}
                                                </Typography>
                                                <Typography classes={{root: classes.tableCellFocusNachname}}>
                                                    {element.focus.nachname}
                                                </Typography>
                                            </TableCell>
                                            <TableCell classes={{paddingDefault: classes.tableCellRange}}>{element.range}</TableCell>
                                            <TableCell classes={{paddingDefault: classes.tableCellReminder}}>{element.reminder.warn}</TableCell>
                                            <TableCell classes={{paddingDefault: classes.tableCellReminder}}>{element.reminder.error}</TableCell>
                                        </TableRow>

                                    })}

                                </TableBody>

                            </Table>
                        </div>
                </Paper>
            </div>

        )

    }

}
export default withStyles(styles, { withTheme: true })(ContentSummary)
