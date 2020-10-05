import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Layout from "../components/layout";
import Project from "../components/project";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

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
        <React.Fragment>
            <Helmet>
            <link rel="canonical" href="https://www.mnoel3.com/projects"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="Michael Noel - A freelance web developer in St.Louis, Missouri. I build amazingly simply applications to help small businesses develop an online presence. Take a look at some of my previous projects."/>
            <meta name="author" content={data.site.siteMetadata.author}/>
        </Helmet>
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
        </React.Fragment>
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
    site {
        siteMetadata {
          title
          description
          author
        }
    }
  }
`