import React from "react";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  content: {
    marginTop: 100,
    paddingTop: 16,
    flexGrow: "1"
  }
}))

export default ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Header></Header>
    <div className={classes.container}>
        <div className={classes.content}>
            {children}
        </div>
        <Footer></Footer>
    </div>
    </React.Fragment>
  )}