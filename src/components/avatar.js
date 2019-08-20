import React from "react"; 
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: 100,
        height: 100,
    },
    avatarTitle: {
        color: theme.palette.secondary.dark
    },
    avatarTitleContainer: {
        marginLeft: 8,
        display: "flex",
        alignItems: "center"
    }
}))
export default props => {
    const classes = useStyles();
return(
    <Grid container alignContent="center">
        <Grid item>
            <Avatar className={classes.avatar} alt='avatar' src={props.imgSrc}/>
        </Grid>
        <Grid item className={classes.avatarTitleContainer}>
            <h3 className={classes.avatarTitle}>{props.title}</h3>
        </Grid>
    </Grid>
)}