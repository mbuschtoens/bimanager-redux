import React from 'react'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Typography from 'material-ui/Typography'
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';

const styles = {
    appBar: {
        position: 'relative',
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class ContentDetail extends React.Component {

    render() {

        return <Dialog fullScreen open={this.props.detailState} onRequestClose={() => { this.props.handleDetailClose() }} transition={Transition}>

            <AppBar>
                <Toolbar>
                    <IconButton color="contrast" onClick={() => { this.props.handleDetailClose() }} aria-label="Schließen">
                        <CloseIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit">Detailansicht für {this.props.name}</Typography>
                </Toolbar>
            </AppBar>
            <img src="roadmap.png" style={{width: "80vw", height: "auto", margin: "auto"}}/>
        </Dialog>

    }
}

export default withStyles(styles, { withTheme: true })(ContentDetail)
