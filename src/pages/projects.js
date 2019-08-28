import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Layout from "../components/layout";
import Project from "../components/project";
import { graphql } from "gatsby";
const useStyles = makeStyles(theme => ({
    projectsContainer: {
        maxWidth: 802,
        margin: "auto"
    },
    project: {
        width: "100%",
        background: "#C0BCB6",
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        marginBottom: "3em"

    }
}))
export default ({ data }) => {
    const classes = useStyles();
    const projects = data.allContentfulProjects.edges;
    return (
        <Layout>
            <Container maxWidth="md">
                <Grid container className={classes.projectsContainer} direction="column">
                    {projects.map(({ node: project}) =>(
                        <Grid key={project.slug} item className={classes.project}>
                           <Project project={project}></Project> 
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query projectQuery {
    allContentfulProjects {
      edges {
        node {
          title
          projectImage {
            fluid(maxWidth: 400) {
                ...GatsbyContentfulFluid
            }
          }
          projectDescription
          techStack
          slug
        }
      }
    }
  }
`