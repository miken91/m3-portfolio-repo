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
    color: theme.palette.secondary.dark
  },
  postTitle: {
    color: theme.palette.secondary.contrastText
  }
}))
const BlogPost = ({ data }) => {
  const classes = useStyles();
  const { title, body, postDate } = data.contentfulBlogPost;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // console.log(node)
        let { title, file } = node.data.target.fields
        // console.log(file["en-US"].url)
        return <img alt={title} className src={file["en-US"].url} />
      }
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