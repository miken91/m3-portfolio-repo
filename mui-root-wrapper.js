import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./src/styles/theme";
import Header from "./src/components/header";

export default ({ element }) => (
    <ThemeProvider theme={theme}>
        {element}
    </ThemeProvider>
)