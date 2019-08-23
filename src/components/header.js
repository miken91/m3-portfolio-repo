import * as React from "react";
import { navigate, Link } from "gatsby";
import Logo from "../components/logo"
import ButtonBase from "@material-ui/core/ButtonBase";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    menuStyle: {
        fontSize: "x-large",
        fontWeight: "Bold",
        color: theme.palette.secondary.contrastText,
        "@media not all and (pointer: coarse)": {
            "&:hover": {
                color: theme.palette.primary.main + " !important"
            }
        },
        marginLeft: 8
    }, 
    linkStyle: {
        margin: "0px 0px 8px",
    },
    linkText: {
        textDecoration: "none",
        fontSize: "3em",
        color: theme.palette.secondary.contrastText,
        "@media not all and (pointer: coarse)": {
            "&:hover": {
                color: theme.palette.primary.main
            }
        }
    },
    root: {
        flexGrow: 1,
        marginTop: 32,
        marginBottom: 32
    },
    appBar: {
        position: "fixed",
        background: "transparent",
        boxShadow: "none",
        "@media not all and (pointer: coarse)": {
            "&:hover": {
                background: theme.palette.secondary.contrastText,
                '& #logo' : {
                    color: theme.palette.secondary.main
                },
                '& #menu' : {
                    color: theme.palette.secondary.main
                }
            }
        },
    },
    menuClosed: {
        position: "fixed",
        top: "100vh",
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        zIndex: 99,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        padding: "10vw",
        transition: "all 0.3s ease",
    },
    menuOpen: {
        background: theme.palette.secondary.main,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        zIndex: 99,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        padding: "10vw",
        transition: "all 0.3s ease",
    },
    linkList: {
        listStyle: "none",
    },
    activeLink: {
        fontWeight: "bold",
        color: theme.palette.primary.main
    }
}));

export default (props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const classes = useStyles();
return (
    <div>
    <AppBar id="parent" className={classes.appBar}>
        <ToolBar>
            <div className={classes.root}>
                <Logo></Logo>
            </div>
            <ButtonBase className={classes.menuStyle} id="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>{!isMenuOpen ? 'explore': 'close'}</ButtonBase>
        </ToolBar>
    </AppBar>
        <div className={isMenuOpen ? classes.menuOpen: classes.menuClosed}>
            <ul className={classes.linkList}>
                <li className={classes.linkStyle}>
                    <Link activeClassName={classes.activeLink} className={classes.linkText} to={"/"}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        home
                    </Link>
                </li>
                <li className={classes.linkStyle}>
                    <Link activeClassName={classes.activeLink} className={classes.linkText} to={"/projects"}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        projects
                    </Link>
                </li>
                <li className={classes.linkStyle}>
                    <Link activeClassName={classes.activeLink} className={classes.linkText} to={"/blog"}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        blog
                    </Link>
                </li>
                <li className={classes.linkStyle}>
                    <Link activeClassName={classes.activeLink} className={classes.linkText} to={"/about"}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        about
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)}

        
    



        