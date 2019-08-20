import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles";
const { BLOCKS, MARKS } = require("@contentful/rich-text-types");

const useStyles = makeStyles(theme => ({
    image: {
        marginTop: "0.67em",
        maxWidth: 425
    },
    content: {
        maxWidth: 425
    },
    header: {
        marginBottom: "20%",
        color: theme.palette.primary.main
    },
    paragraph: {
        color: theme.palette.secondary.contrastText,
        fontSize: "large"
    }
}));
export default ({data}) => {
    const classes = useStyles();
    const {heroImage, landingPageText} = data.contentfulLandingPage;
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
            <Grid container direction="row" justify="space-evenly">
                <Grid item>
                    <img className={classes.image} src={heroImage.file.url} alt=""></img>
                </Grid>
                <Grid item>
                    <div className={classes.content}>
                        {documentToReactComponents(landingPageText.json, options)}
                    </div>
                </Grid>
            </Grid>
        </Container>
    </Layout>
)}

export const query = graphql`
query LandingPageQuery {
    contentfulLandingPage {
      heroImage {
        file {
            url
        }
      }
      landingPageText {
        json
      }
    }
  }
`

