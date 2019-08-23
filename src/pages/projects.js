import React from "react";
import Container from "@material-ui/core/Container";
import Layout from "../components/layout";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { graphql } from "gatsby";

export default () => {
    return (
        <Layout>
            <Container>
                <GridList>
                    <GridListTile>
                        <GridListTileBar title={"Title Here"}>
                        </GridListTileBar>
                    </GridListTile>
                </GridList>
            </Container>
        </Layout>
    )
}

// export const query = graphql``