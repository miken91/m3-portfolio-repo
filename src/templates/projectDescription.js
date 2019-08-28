import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
const { BLOCKS } = require("@contentful/rich-text-types");

const useStyles = makeStyles(theme => ({
  backButton: {
    color: theme.palette.primary.dark
  }, 
  postDate: {
    color: theme.palette.primary.light
  },
  postTitle: {
    color: theme.palette.primary.main,
    fontSize: "3em"
  },
  paragraph: {
    color: theme.palette.secondary.contrastText
  },
  header: {
    color: theme.palette.primary.main
  },
  gridContainer: {
      maxWidth: "600"
  },
  image: {
      borderStyle: "solid",
      borderColor: theme.palette.primary.main
  },
  button: {
      backgroundColor: theme.palette.primary.light,
      margin: ".67em",
      padding: ".67em"
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
  },
  listItem: {
    color: theme.palette.primary.dark,
    marginRight: ".67em",
  },
  techTitle: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
    marginRight: ".67em"
  },
  buttonContainer: {
    textAlign: "center"
  },
}))
const ProjectDescription = ({ data }) => {
  const classes = useStyles();
  const {title, projectDescription, techStack, siteLink, githubLink, childContentfulProjectsProjectStoryRichTextNode, projectImage} = data.contentfulProjects;
  const Paragraph = ({ children }) => <p className={classes.paragraph}>{children}</p>
  const Header = ({ children }) => <h1 className={classes.header}>{children}</h1>
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_1]: (node, children) => <Header>{children}</Header>
    }
  }
  return (
    <Layout>
        <Container maxWidth="sm">
            <Link className={classes.backButton} to="/projects"> &lt;Back</Link>
            <h1 className={classes.postTitle}>{title}</h1>
            <h2 className={classes.postDate}>{projectDescription}</h2>
            <Img className={classes.image} fluid={projectImage.fluid}/>
            <div className={classes.buttonContainer}>
                <Button href={siteLink} variant="contained" size="large" className={classes.button}> See Site </Button>
                <Button href={githubLink} variant="contained" size="large" className={classes.button}> See Code </Button>
            </div>
            <ul className={classes.list}> 
                <div className={classes.techTitle}>Tech: </div>
                {techStack.map((tech) => 
                    <li key={tech} className={classes.listItem}>{tech}</li>
                )}
            </ul>
            {documentToReactComponents(childContentfulProjectsProjectStoryRichTextNode.json, options)}
      </Container>
    </Layout>
  );
};

export default ProjectDescription;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
        title
        projectDescription
        techStack
        slug
        siteLink
        githubLink
        childContentfulProjectsProjectStoryRichTextNode {
          json
        }
        projectImage {
            fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid
            }
        }
    }
  }
`;