import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { navigate } from "gatsby"
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  blogPostTitle: {
    fontSize: "x-large",
    fontWeight: "bold",
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  blogPostListItem: {
    listStyle: "none"
  },
  blogPostList: {
    margin: 0,
    padding: 0,

  },
  blogTitle: {
    color: theme.palette.primary.dark
  },
  description: {
    fontWeight: "bold",
    color: theme.palette.secondary.contrastText
  },
  postDate: {
    color: theme.palette.primary.light
  }
}))
const BlogPosts = ({ data }) => {
  const classes = useStyles();
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <Container maxWidth="sm">
        <h1 className={classes.blogTitle}>My Blog</h1>
        <div>
          <ul className={classes.blogPostList}>
          {blogPosts.map(({ node: post }) => (
            <li className={classes.blogPostListItem} key={post.id}>
              <ButtonBase className={classes.blogPostTitle} onClick={() => {navigate(`/blogpost/${post.slug}`)}}>{post.title}</ButtonBase>
              <p className={classes.postDate}>{post.postDate}</p>
              <p className={classes.description}>{post.description}</p>
            </li>
          ))}
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPosts;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          postDate(formatString: "MMMM Do, YYYY")
          description
          slug
        }
      }
    }
  }
`;