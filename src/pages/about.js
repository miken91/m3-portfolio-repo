import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import aboutStyles from "./about.module.css"
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
})

export default ({data}) => {
  console.log(data);
  const classes = useStyles();
  return (
    <Layout>
      <div className={aboutStyles.aboutPage}>
      {data.allContentfulAboutSection.edges.map(({ node }) => (
        <div key={node.id}>
          <div className={aboutStyles.avatarTitle}>
            <Avatar alt='avatar' src={node.avatar.fluid.src} className={classes.avatar}/>
            <div>
              <h3>{node.title}</h3>
            </div>
          </div>
          <div className={aboutStyles.aboutInfo}>
            <p>{node.about.about}</p>
            <p>{node.aboutSec2.aboutSec2}</p>
          </div>
        </div>
      ))}
      <hr className={aboutStyles.divider}/>
      <h3>Here is a list of technologies I've had the pleasure to leverage:</h3>
        <ul className={aboutStyles.techList}>
        {data.site.siteMetadata.technologiesList.map((tech, index ) => (
          <li key={index}>{tech}</li>
        ))}
        </ul>
        <hr className={aboutStyles.divider}/>
        <h3>{data.site.siteMetadata.letsTalk}</h3>
        <p>Send me an <a className={aboutStyles.linkStyle} href='mailto:hello@mike.e.noel3@gmail.com'>email!</a></p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query AboutQuery {
  allContentfulAboutSection {
    edges {
      node {
        id
        avatar {
          fluid {
            src
          }
        }
        title
        about {
          about
        }
        aboutSec2 {
          aboutSec2
        }
      }
    }
  }
  site {
    siteMetadata {
      technologiesList
      letsTalk
    }
  }
}`