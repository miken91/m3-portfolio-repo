import React from "react";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import ButtonBase from "@material-ui/core/ButtonBase";
import headerStyles from "./header.module.css";
import { navigate } from "gatsby";

export default props =>
  <div>
      <div className={headerStyles.titleContainer}>
          <ButtonBase onClick={() => {navigate("/")}} className={headerStyles.nameTitle} disableTouchRipple>
              <FreeBreakfast style={{color:"#00e5ff"}} />
              <h1 style={{}}>{props.name}</h1>
          </ButtonBase>
          <nav className={headerStyles.nav}>
              <ul>
                  <li><ButtonBase onClick={() => {navigate("/")}} className={headerStyles.listItem} disableTouchRipple>Projects</ButtonBase></li>
                  <li><ButtonBase onClick={() => {navigate("/blog")}} className={headerStyles.listItem} disableTouchRipple>Blog</ButtonBase></li>
                  <li><ButtonBase onClick={() => {navigate("/about")}} className={headerStyles.listItem} disableTouchRipple>About</ButtonBase></li>
              </ul>
          </nav>
      </div>
  </div>


        