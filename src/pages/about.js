import React from "react";
import { graphql } from "gatsby";
import AvatarComponent from "../components/avatar";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    color: theme.palette.secondary.dark
  },
  technologiesList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
    paddingLeft: 0
  },
  technologiesListLink: {
    background: theme.palette.secondary.light,
    marginRight: 8
  },
  emailStyles: {
    fontSize: "large"
  }, 
  emailLinkStyle: {
    textDecoration: "none",
    color: theme.palette.secondary.dark
  }
}))
export default ({data}) => {
  const classes = useStyles();
  return (
      <Container  maxWidth="md">
        <div>
        {data.allContentfulAboutSection.edges.map(({ node }) => (
          <div key={node.id}>
            <AvatarComponent imgSrc={node.avatar.fluid.src} title={node.title}></AvatarComponent>
            <div>
              <p>{node.about.about}</p>
              <p>{node.aboutSec2.aboutSec2}</p>
            </div>
          </div>
        ))}
        <Divider></Divider>
        <h3 className={classes.sectionHeader}>Here is a list of technologies I've had the pleasure to leverage:</h3>
          <ul className={classes.technologiesList}>
          {data.site.siteMetadata.technologiesList.map((tech, index ) => (
            <li className={classes.technologiesListLink} key={index}>{tech}</li>
          ))}
          </ul>
          <Divider></Divider>
          <h3 className={classes.sectionHeader}>{data.site.siteMetadata.letsTalk}</h3>
          <p className={classes.emailStyles}>Send me an <a className={classes.emailLinkStyle} href='mailto:hello@mike.e.noel3@gmail.com'>email!</a></p>
        </div>
      </Container>
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