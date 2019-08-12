import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { navigate } from "gatsby"
import blogStyles from "./blog.module.css"
import ButtonBase from "@material-ui/core/ButtonBase";

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      
    <h1>My Blog</h1>
      <div>
        <ul>
        {blogPosts.map(({ node: post }) => (
          <li key={post.id}>
            <ButtonBase className={blogStyles.link} onClick={() => {navigate(`/blogpost/${post.slug}`)}}>{post.title}</ButtonBase>
            <p className={blogStyles.date}>{post.postDate}</p>
            <p className={blogStyles.description}>{post.description}</p>
          </li>
        ))}
        </ul>
      </div>
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