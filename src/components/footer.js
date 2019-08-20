import React from "react";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    footerStyle: {
      textAlign: "center",
      color: theme.palette.secondary.contrastText
    }, 
    footerLinkStyle: {
      color: theme.palette.secondary.contrastText,
      textDecoration: "none",
        "&:hover": {
          color: theme.palette.primary.main
        }
    }
  }))
export default () => {
    const classes = useStyles();
    return (
        <footer>
            <div>
                <p className={classes.footerStyle}>Built with <a className={classes.footerLinkStyle} href='https://www.gatsbyjs.org/'>Gatsby </a> 
                and hosted on <a className={classes.footerLinkStyle} href="https://www.netlify.com/"> Netlify. </a>
                This code is open source and available on 
                <a className={classes.footerLinkStyle} href='https://github.com/miken91'> github.</a></p>
            </div>
        </footer>
    )
}