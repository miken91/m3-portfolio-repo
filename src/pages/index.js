import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import indexStyles from "./index.module.css";

export default ({data}) => {
    const {heroImage, landingPageText} = data.contentfulLandingPage;
    console.log(heroImage);
    console.log(landingPageText);
    return(
    <Layout>
        <div className={indexStyles.container}>
            <img src={heroImage.file.url} alt="" className={indexStyles.heroImage}></img>
            <div className={indexStyles.renderedText}>
                {documentToReactComponents(landingPageText.json)}
            </div>
        </div>
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

