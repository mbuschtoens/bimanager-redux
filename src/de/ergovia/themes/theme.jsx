import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import grey from 'material-ui/colors/grey'
import yellow from 'material-ui/colors/yellow'
import { createMuiTheme } from 'material-ui/styles';


export default createMuiTheme({

    palette: {
        primary: {
            ...grey,
            "500": "#F5F5F5"
        },
        secondary: green,
        error: red,
        warn: yellow
    }

});
