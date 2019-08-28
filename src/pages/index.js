import React from "react";
import { graphql, navigate } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "@material-ui/core/Container"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const { BLOCKS } = require("@contentful/rich-text-types");

const useStyles = makeStyles(theme => ({
    content: {
        maxWidth: 500
    },
    header: {
        fontSize: "3em",
        marginBottom: "10%",
        color: theme.palette.primary.main
    },
    paragraph: {
        color: theme.palette.secondary.contrastText,
        fontSize: "large"
    },
    projectsButton: {
        borderColor: theme.palette.primary.light
    }
}));
export default ({data}) => {
    const classes = useStyles();
    const { landingPageText } = data.contentfulLandingPage;
    const Header = ({ children }) => <h1 className={classes.header}>{children}</h1>;
    const Paragraph = ({ children }) => <p className={classes.paragraph}>{children}</p>
    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Header>{children}</Header>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
        }
    };
    return(
    <Layout>
        <Container maxWidth="md">
            <div className={classes.content}>
                {documentToReactComponents(landingPageText.json, options)}
            </div>
            <Button onClick={() => {navigate("/projects")}} variant="contained" color="primary" className={classes.projectsButton}>
                Take a look at my projects ->
            </Button>
        </Container>
    </Layout>
)}

export const query = graphql`
query LandingPageQuery {
    contentfulLandingPage {
      landingPageText {
        json
      }
    }
  }
`

