import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import grey from 'material-ui/colors/grey'
import { createMuiTheme } from 'material-ui/styles';


export default createMuiTheme({

    palette: {
        primary: {
            ...grey,
            "500": "#FFFFFF"
        },
        secondary: green,
        error: red
    }

});
