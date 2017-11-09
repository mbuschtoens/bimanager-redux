import React from 'react';
import classNames from 'classnames';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import ContentDetail from './contentDetail'
import ContentToolbar from './contentToolbar'
import ContentListItem from './contentListItem'

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
    }
});

class ContentWidget extends React.Component {


    constructor(props) {
        super(props);

        this.styles = {
            frame: {
                gridArea: 'content',
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '100%',
            },
            paper: {
                height: "80vh",
                width: "38vw",
                position: 'relative'
            }
        };
        this.data = [{
                id: 1,
                group: {name: "Teilnehmergruppe AGH 01"},
                participants: [{id: 1, focus: {vorname: "Stefan", nachname: "Dittmann"}, range: {from: moment(), to: moment()}, reminder: {ok: 100, warn: 1, error: 2}},
                    {id: 2, focus: {vorname: "Matthis", nachname: "Buschtöns"}, range: {from: moment(), to: moment()}, reminder: {ok: 100, warn: 0, error: 3}},
                    {id: 3, focus: {vorname: "Merle", nachname: "Ehm"}, range: {from: moment(2017-01-01), to: moment()}, reminder: {ok: 100, warn: 3, error: 0}},
                    {id: 4, focus: {vorname: "Jan", nachname: "Hansen"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 1, error: 0}},
                    {id: 5, focus: {vorname: "Theresa", nachname: "Lill"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 1, error: 2}}]
            },{
                id: 2,
                group: {name: "BVB 2017 - 2018"},
                participants: [{id: 6, focus: {vorname: "Adrian", nachname: "Cremer"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 0}},
                    {id: 7, focus: {vorname: "Kristina", nachname: "Orth"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 5, error: 0}},
                    {id: 8, focus: {vorname: "Michael", nachname: "Hanse"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 1, error: 1}},
                    {id: 9, focus: {vorname: "Jan-Philipp", nachname: "Rathje"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 2, error: 3}},
                    {id: 10, focus: {vorname: "Ralf", nachname: "Kohlgrüber"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 11, focus: {vorname: "Jens", nachname: "Buchloh"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 12, focus: {vorname: "Tom", nachname: "Bach"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 13, focus: {vorname: "Steffan", nachname: "Vosgerau"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 14, focus: {vorname: "Stefan", nachname: "Stepponat"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 15, focus: {vorname: "Alexander", nachname: "Grotegut"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}}
                ]
            }, {
                id: 3,
                group: {name: "AGH Massnahmejahr 2017"},
                participants: [{id: 16, focus: {vorname: "Alexander", nachname: "Schnoor"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 17, focus: {vorname: "Prateek", nachname: "Bahtt"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 18, focus: {vorname: "Gunhild", nachname: "Grot"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 19, focus: {vorname: "Sayali", nachname: "Patkar"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 20, focus: {vorname: "Felix", nachname: "Braun"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 21, focus: {vorname: "Sascha", nachname: "Begier"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 22, focus: {vorname: "Chris", nachname: "Heinrichs"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 23, focus: {vorname: "Matthias", nachname: "Kirsch"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}},
                    {id: 24, focus: {vorname: "Andi", nachname: "Büker"}, range: {from: moment('2017-01-01'), to: moment('2018-01-01')}, reminder: {ok: 100, warn: 0, error: 1}}]
            }
        ];
        this.state = { detail: false, detailName: '', selected: this.data[0].participants};
    }


    handleDetailOpen(focus) {
        this.setState({ detail: true });
        this.setState({ detailName: `${focus.vorname} ${focus.nachname}`})
    }

    handleDetailClose() {
        this.setState({ detail: false });
    }

    handleFocusChange(selected) {
        this.setState({ selected })
    }

    render() {

        const { classes } = this.props;

        return (
            <div style={this.styles.frame}>
                <Paper style={this.styles.paper} position="fixed">
                        <ContentToolbar data={this.data} onChange={(selected) => {this.handleFocusChange(selected)}}/>
                        <Divider/>
                        <ContentDetail name={this.state.detailName} detailState={this.state.detail} handleDetailClose={() => {this.handleDetailClose()}}/>
                        <List className={classNames(classes.content)}>
                                {this.state.selected.map((element) => {
                                    return <ContentListItem key={element.id} element={element} handleDetailOpen={() => {this.handleDetailOpen(element.focus)}}/>
                                })}
                        </List>
                </Paper>
            </div>

        )

    }

}
export default withStyles(styles, { withTheme: true })(ContentWidget)
