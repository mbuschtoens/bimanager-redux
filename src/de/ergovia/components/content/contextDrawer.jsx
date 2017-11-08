import React from 'react';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import NotificationIcon from 'material-ui-icons/Notifications';
import FlagIcon from 'material-ui-icons/Flag';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

const styles = (theme) => ({

    drawerPaper: {
        position: 'absolute',
        height: '100%',
        width: 350,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerTableName: {
        root: {
            width: "80vw"
        }
    },
    drawerTableReminder: {
        root: {
            width: "10vw"
        }
    }
});

class ContextDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            toolbar: {
                backgroundColor: 'red'
            },
            frame: {
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '100%',
            },
            paper: {
                margin: 100,
                height: "80vh",
                overflow: "hidden",
                position: 'relative'
            },
            drawer: {
                paper: "position: absolute"
            },
            drawerContent: {
                position: 'fixed',
                width: 350
            }
        };
        this.data = [
            {id:1, focus: 'Teilnehmergruppe AGH 01', reminder: { warn:4, error: 3} },
            {id:2, focus: 'Teilnehmergruppe AGH 02', reminder: { warn:4, error: 3} },
            {id:3, focus: 'Teilnehmergruppe AGH 03', reminder: { warn:4, error: 3} },
            {id:4, focus: 'Teilnehmergruppe AGH 04', reminder: { warn:4, error: 3} },
            {id:5, focus: 'Teilnehmergruppe AGH 05', reminder: { warn:4, error: 3} },
            {id:6, focus: 'Teilnehmergruppe AGH 06', reminder: { warn:4, error: 3} },
            {id:7, focus: 'Teilnehmergruppe AGH 07', reminder: { warn:4, error: 3} },
            {id:8, focus: 'Teilnehmergruppe AGH 08', reminder: { warn:4, error: 3} },
            {id:9, focus: 'Teilnehmergruppe AGH 09', reminder: { warn:4, error: 3} },
            {id:10, focus: 'Teilnehmergruppe AGH 10', reminder: { warn:4, error: 3} },
            {id:11, focus: 'Teilnehmergruppe AGH 11', reminder: { warn:4, error: 3} },
            {id:12, focus: 'Teilnehmergruppe AGH 12', reminder: { warn:4, error: 3} },
            {id:13, focus: 'Teilnehmergruppe AGH 13', reminder: { warn:4, error: 3} },
            {id:14, focus: 'Teilnehmergruppe AGH 14', reminder: { warn:4, error: 3} },
            {id:15, focus: 'Teilnehmergruppe AGH 15', reminder: { warn:4, error: 3} },
            {id:16, focus: 'Teilnehmergruppe AGH 16', reminder: { warn:4, error: 3} },
            {id:17, focus: 'Teilnehmergruppe AGH 17', reminder: { warn:4, error: 3} },
            {id:18, focus: 'Teilnehmergruppe AGH 18', reminder: { warn:4, error: 3} },
            {id:19, focus: 'Teilnehmergruppe AGH 19', reminder: { warn:4, error: 3} },

        ]
    }

    render() {

        const { classes, theme } = this.props;

        return <Drawer  classes={{paper: classes.drawerPaper}} type="persistent"  open={this.props.drawerState}>
                    <div tabIndex={0}>
                        <div className={classes.drawerHeader}>
                            <Button>Gruppen</Button>
                            <Button>Teilnehmer</Button>
                            <IconButton disabled={true}><NotificationIcon /></IconButton>
                            <IconButton disabled={true}><FlagIcon /></IconButton>
                            <IconButton onClick={() => {this.props.handleDrawerClose()}}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <div style={this.styles.drawerContent}>
                            <Table>

                                <TableBody>

                                    {this.data.map((element) => {

                                        return <TableRow key={element.id}>
                                            <TableCell >{element.focus}</TableCell>
                                            <TableCell >{element.reminder.warn}</TableCell>
                                            <TableCell >{element.reminder.error}</TableCell>
                                        </TableRow>

                                    })}

                                </TableBody>

                            </Table>
                        </div>

                    </div>
                </Drawer>

    }

}

export default withStyles(styles, { withTheme: true })(ContextDrawer)