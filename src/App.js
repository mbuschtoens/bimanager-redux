import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Theme from './de/ergovia/themes/theme'
import Body from './de/ergovia/components/body/body'
import MenuBar from './de/ergovia/components/menubar/menubar'
import ContentSummary from './de/ergovia/components/content/contentSummary'
import { withTheme } from 'material-ui/styles';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.styles = {
            frame: {
                backgroundColor: Theme.palette.secondary["A100"]
            }

        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

    }

    render() {
        return (
            <Body color={this.styles.frame.backgroundColor}>
            <MuiThemeProvider theme={Theme}>
                <MenuBar title="Bildungsmanager" />
                <ContentSummary/>
            </MuiThemeProvider>
            </Body>

        );

    }
}

export default withTheme()(App)
