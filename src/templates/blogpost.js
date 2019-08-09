import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import blogpostStyles from "./blogpost.module.css"
const { BLOCKS } = require("@contentful/rich-text-types")

const BlogPost = ({ data }) => {
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
        <div className={blogpostStyles.blogPost}>
            <h1>{title}</h1>
            <p className={blogpostStyles.date}>{postDate}</p>
            {documentToReactComponents(body.json, options)}
            <Link to="/blog">View more posts</Link>
            <Link to="/">Back to Home</Link>
        </div>
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