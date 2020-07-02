import {createMuiTheme} from '@material-ui/core/styles';
import {cyan,grey} from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette:{
        primary:cyan,
        secondary:grey,
        background:{
            paper:"#e0e0e0"
        }
    }
});

export default theme;