import React from "react";
import { navigate } from "gatsby";
import Logo from "../components/logo"
import ButtonBase from "@material-ui/core/ButtonBase";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    navLinkStyle: {
        fontSize: "x-large",
        fontWeight: "Bold",
        color: theme.palette.secondary.contrastText,
        "&:hover": {
            color: theme.palette.primary.main + " !important"
        },
        marginLeft: 8
    }, 
    rootGridContainer: {
        marginTop: "8px",
        paddingTop: "8px"
    },
    navLinks: {
        marginTop: 32,
        marginBottom: 32,
        display: "flex",
        justifyContent: "space-between"
    },
    root: {
        flexGrow: 1,
        marginTop: 32,
        marginBottom: 32
    },
    appBar: {
        position: "static",
        background: "transparent",
        boxShadow: "none",
        "&:hover": {
            background: theme.palette.secondary.contrastText,
            '& #logo' : {
                color: theme.palette.secondary.main
            },
            '& #projects' : {
                color: theme.palette.secondary.main
            },
            '& #blog' : {
                color: theme.palette.secondary.main
            },
            '& #about' : {
                color: theme.palette.secondary.main
            }
        },
        
    }
}));

export default (props) => {
    const classes = useStyles();
    
return (
    <div>
    <AppBar id="parent" className={classes.appBar}>
        <ToolBar>
        <div className={classes.root}>
            <Logo></Logo>
        </div>
        <div className={classes.navLinks}>
            <ButtonBase id="projects" className={classes.navLinkStyle} disableTouchRipple onClick={() => {navigate("/projects")}}>Projects</ButtonBase>
            <ButtonBase id="blog"className={classes.navLinkStyle} disableTouchRipple onClick={() => {navigate("/blog")}}>Blog</ButtonBase>
            <ButtonBase id="about"className={classes.navLinkStyle} disableTouchRipple onClick={() => {navigate("/about")}}>About</ButtonBase>
        </div>
        </ToolBar>
    </AppBar>
    </div>
)}

        
    



        