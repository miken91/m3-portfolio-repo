import React from "react";
import { graphql } from "gatsby";
import { makeStyles, Grid, Container } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
const { BLOCKS, INLINES } = require("@contentful/rich-text-types");

const useStyles = makeStyles(theme => ({
  imageGridContainer: {
    maxWidth: 400
  },
  contentGridItem: {
    maxWidth: 400
  },
  header1: {
    fontSize: "2.5em",
    marginTop: 0,
    color: theme.palette.primary.main
  },
  header2: {
    color: theme.palette.primary.main
  },
  paragraph: {
    color: theme.palette.secondary.contrastText,
    fontSize: "large"
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    direction: "row",
    listStyleType: "none",
    marginLeft: 0,
    paddingLeft: 0
  },
  listItem: {
    color: theme.palette.primary.light,
    marginRight: ".67em",
    "& p": {
      color: theme.palette.primary.light
    }
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  gridContainer: {
    marginBottom: "2em"
  }

}))
export default ({data}) => {
  const classes = useStyles();
  const {images, childContentfulAboutSectionAboutRichTextNode} = data.contentfulAboutSection;
  const Header1 = ({ children }) => <h1 className={classes.header1}>{children}</h1>;
  const Header2 = ({ children }) => <h2 className={classes.header2}>{children}</h2>;
  const Paragraph = ({ children }) => <p className={classes.paragraph}>{children}</p>;
  const List = ({ children }) => <ul className={classes.list}>{children}</ul>;
  const ListItem = ({ children }) => <li className={classes.listItem}>{children}</li>;
  const Link = ({href, children }) => <a href={href} className={classes.link}>{children}</a>
  const options = {
      renderNode: {
          [BLOCKS.HEADING_1]: (node, children) => <Header1>{children}</Header1>,
          [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
          [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
          [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
          [BLOCKS.HEADING_2]: (node, children) => <Header2>{children}</Header2>,
          [INLINES.HYPERLINK]: (node, children) => {
          const href = node.data.uri;
          return <Link href={href}>{children}</Link>
        }
      }
  };
  return (
    <React.Fragment>
      <Helmet>
            <link rel="canonical" href="https://www.mnoel3.com/about"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="Michael Noel - A freelance web developer in St.Louis, Missouri. I build amazingly simple applications to help small businesses develop an online presence. Learn more about me."/>
            <meta name="author" content={data.site.siteMetadata.author}/>
        </Helmet>
      <Layout >
        <Container  maxWidth="md">
          <Grid container direction="row"  justify="space-around" className={classes.gridContainer}>
            <Grid container item direction="column" className={classes.imageGridContainer} spacing={1}>
              <Grid container item>
                <Grid item style={{width: "100%"}}>
                  <Img fluid={images[0].fluid} alt="About page image 1" />
                </Grid>
              </Grid>
              <Grid container direction="row" justify="space-between" className={classes.imageGridContainer} item>
                <Grid item style={{width: "49%"}}>
                  <Img fluid={images[1].fluid}  alt="About page image 2"/>
                </Grid>
                <Grid item style={{width: "49%"}}>
                  <Img fluid={images[2].fluid} alt="About page image 3"/>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item className={classes.contentGridItem}>
              <Grid item style={{width: "100%"}}>
                {documentToReactComponents(childContentfulAboutSectionAboutRichTextNode.json, options)}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`
query aboutQuery {
  contentfulAboutSection {
    images {
      fluid(maxWidth: 400) {
        ...GatsbyContentfulFluid
      }
    }
    childContentfulAboutSectionAboutRichTextNode {
      json
    }
  }
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}`