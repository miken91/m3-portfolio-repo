import React from "react";
import Header from "../components/header";
import Container from "@material-ui/core/Container";
import layoutStyles from "./layout.module.css";

export default ({ children }) => (
  <div>
      <Header name='Michael Noel' about='About' projects='Projects' contact='Contact'></Header>
      {children}
      <footer className={layoutStyles.footerStyle}>
        <p>Built with <a href='https://www.gatsbyjs.org/'>Gatsby</a> and hosted on <a href="https://www.netlify.com/"> Netlify</a></p>
        <p>mike.e.noel3@gmail.com</p>
        <p><a href='https://github.com/miken91'>github</a></p>
      </footer>
  </div>
)