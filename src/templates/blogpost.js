import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
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
  }
}))
const BlogPost = ({ data }) => {
  const classes = useStyles();
  const { title, body, postDate } = data.contentfulBlogPost;
  const Paragraph = ({ children }) => <p className={classes.paragraph}>{children}</p>
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
    }
  }
  return (
    <Layout>
      <Container maxWidth="sm">
        <div>
            <Link className={classes.backButton} to="/blog"> &lt;Back</Link>
            <h1 className={classes.postTitle}>{title}</h1>
            <p className={classes.postDate}>{postDate}</p>
            {documentToReactComponents(body.json, options)}
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      postDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;