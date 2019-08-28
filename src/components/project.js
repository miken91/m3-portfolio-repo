import * as React from "react";
import Img from "gatsby-image";
import { ButtonBase, makeStyles, Grid } from "@material-ui/core";
import { navigate } from "gatsby";

const useStyles = makeStyles(theme => ({
    projectButtonSize: {
        width: "100%",
    },
    gridImageContainer: {
        maxWidth: 398
    },
    gridContentContainer: {
        maxWidth: 398
    },
    projectImage: {
        margin: "1em"
    },
    projectTitle: {
        textAlign: "left",
        "@media only screen and (max-width: 980px)": {
            textAlign: "center"
        },
        fontSize: "3em",
        color: theme.palette.primary.dark,
        marginBottom: ".25em"
    },
    list: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        listStyleType: "none",
        marginTop: "1em",
        paddingTop: "1em",
        marginLeft: 0,
        paddingLeft: 0,
        "@media only screen and (max-width: 980px)": {
            justifyContent: "center"
        },
    },
    listItem: {
        color: theme.palette.primary.dark,
        marginRight: ".67em",
    },
    techTitle: {
        fontWeight: "bold"
    },
    projectDescription: {
        textAlign: "left",
        "@media only screen and (max-width: 980px)": {
            textAlign: "center"
        }
    }

})) 

export default (props) => {
    const classes = useStyles();
    return (
        <ButtonBase className={classes.projectButtonSize} onClick={() => {navigate(`/projects/${props.project.slug}`)}}>
            <Grid container direction="row" justify="center">
                <Grid container item className={classes.gridImageContainer}>
                    <Grid item style={{width:"100%"}}>
                        <Img className={classes.projectImage} fluid={props.project.projectImage.fluid}/>
                    </Grid>
                </Grid>
                <Grid container item direction="column" className={classes.gridContentContainer}>
                    <Grid container item direction="column">
                        <h1 className={classes.projectTitle}>{props.project.title}</h1>
                        <h3 className={classes.projectDescription}>{props.project.projectDescription}</h3>
                        <ul className={classes.list}> 
                        <div className={classes.techTitle}>Tech: </div>
                            {props.project.techStack.map((tech) => 
                                <li className={classes.listItem}>{tech}</li>
                            )}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </ButtonBase>
    )
}