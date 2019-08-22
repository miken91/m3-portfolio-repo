import * as React from "react";
import { navigate } from "gatsby";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
    logoStyles: {
        fontSize: 'xx-large',
        margin: 0,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
            color: theme.palette.primary.main + " !important"
        }
    },
    cupColor: {
        color: theme.palette.primary.dark
    }
}));
export default (props) => {
    const classes = useStyles();
    return(
        <ButtonBase onClick={() => {navigate("/")}} disableTouchRipple>
            <FreeBreakfast className={classes.cupColor}/>
            <h1 id="logo" className={classes.logoStyles}>Michael Noel</h1>
        </ButtonBase>
    )}