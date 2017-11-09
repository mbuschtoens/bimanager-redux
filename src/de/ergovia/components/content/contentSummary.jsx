import React from 'react';
import classNames from 'classnames';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';


import ContentDetail from './contentDetail'
import ContextDrawer from './contextDrawer'
import ContentToolbar from './contentToolbar'
import ContentSummaryListItem from './contentListItem'

const styles = (theme) => ({

    content: {
        width: '100%',
        padding: 0,
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'scroll',
        display: 'block',
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
    }

});

class ContentSummary extends React.Component {


    constructor(props) {
        super(props);
        this.state = {drawer: false, detail: false, detailName: ''};
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
            {id: 10, focus: {vorname: "Ralf", nachname: "Kohlgrüber"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 11, focus: {vorname: "Jens", nachname: "Buchloh"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 12, focus: {vorname: "Tom", nachname: "Bach"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 13, focus: {vorname: "Steffan", nachname: "Vosgerau"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 14, focus: {vorname: "Stefan", nachname: "Stepponat"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 15, focus: {vorname: "Alexander", nachname: "Grotegut"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 16, focus: {vorname: "Alexander", nachname: "Schnoor"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 17, focus: {vorname: "Prateek", nachname: "Bahtt"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 18, focus: {vorname: "Gunhild", nachname: "Grot"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 19, focus: {vorname: "Sayali", nachname: "Patkar"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 20, focus: {vorname: "Felix", nachname: "Braun"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 21, focus: {vorname: "Sascha", nachname: "Begier"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 22, focus: {vorname: "Chris", nachname: "Heinrichs"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 23, focus: {vorname: "Matthias", nachname: "Kirsch"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}},
            {id: 24, focus: {vorname: "Andi", nachname: "Büker"}, range: "01.01.2018 - 01.01.2019", reminder: {warn: 0, error: 1}}

        ];
    }

    handleDrawerOpen() {
        this.setState({ drawer: true });
    };

    handleDrawerClose() {
        this.setState({ drawer: false });
    };

    handleDetailOpen(focus) {
        this.setState({ detail: true });
        this.setState({ detailName: `${focus.vorname} ${focus.nachname}`})
    }

    handleDetailClose() {
        this.setState({ detail: false });
    }


    render() {

        const { classes } = this.props;

        return (
            <div style={this.styles.frame}>
                <Paper style={this.styles.paper} position="fixed">
                        <ContentToolbar drawerState={this.state.drawer} handleDrawerOpen={() => {this.handleDrawerOpen()}}/>
                        <Divider/>
                        <ContextDrawer drawerState={this.state.drawer} handleDrawerClose={() => {this.handleDrawerClose()}}/>
                        <ContentDetail name={this.state.detailName} detailState={this.state.detail} handleDetailClose={() => {this.handleDetailClose()}}/>
                        <List className={classNames(classes.content, this.state.drawer && classes.contentShift)}>

                                    {this.data.map((element) => {
                                        return <ContentSummaryListItem key={element.id} element={element} handleDetailOpen={() => {this.handleDetailOpen(element.focus)}} drawerState={this.state.drawer}/>
                                    })}
                        </List>
                </Paper>
            </div>

        )

    }

}
export default withStyles(styles, { withTheme: true })(ContentSummary)
