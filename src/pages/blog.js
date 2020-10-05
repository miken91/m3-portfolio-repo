import React from "react";
import { graphql } from "gatsby";
import { navigate } from "gatsby"
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

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
    listStyle: "none",
    marginBottom: "3em"
  },
  blogPostList: {
    margin: 0,
    padding: 0,

  },
  blogTitle: {
    fontSize: "3em",
    color: theme.palette.primary.dark,
    marginBottom: "1.5em"
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
    <React.Fragment>
      <Helmet>
            <link rel="canonical" href="https://www.mnoel3.com/blog"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="Michael Noel - A freelance web developer in St.Louis, Missouri. I build amazingly simple applications to help small businesses develop an online presence."/>
            <meta name="author" content={data.site.siteMetadata.author}/>
        </Helmet>
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
    </React.Fragment>
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
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;