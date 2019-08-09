import React from "react"; 
import Avatar from "@material-ui/core/Avatar";
import avatarStyles from "./avatar.module.css"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    avatar: {
      margin: 10,
      width: 100,
      height: 100
    }
})

export default props => {
    const classes = useStyles();
return(
    <div className={avatarStyles.avatarTitle}>
        <Avatar alt='avatar' src={props.imgSrc} className={classes.avatar}/>
        <div>
            <h3>{props.title}</h3>
        </div>
    </div>
)}