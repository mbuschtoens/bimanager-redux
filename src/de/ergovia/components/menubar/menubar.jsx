import React from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles';

class MenuBar extends React.Component {

    render() {
        return <AppBar color="primary" >
            <Toolbar>
                <Typography type="title" color="secondary">
                    {this.props.title}
                </Typography>
            </Toolbar>

        </AppBar>
    }
}

export default withTheme()(MenuBar)