import React from "react";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  content: {
    marginTop: 64,
    paddingTop: 16,
    flexGrow: "1"
  }
}))

export default ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )}