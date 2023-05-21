import React from "react";
import Header from "components/Header/Header";
import headerLogo from "assets/images/header-logo.webp";
import cn from "classnames";
import st from "./HeaderMain.module.scss";

function HeaderMain({ title, text = "", className = "" }) {
  return (
    <div className={cn(st.container, className)}>
      <div className={st.homeMainContainer}>
        <img className={st.homeMain} src={headerLogo} alt="Logo" />
        <div className={st.invisibleBlock} />
        <Header />
        <div className={st.homeMainContent}>
          <div className={st.homeMainContentInfo}>
            <h2 className={st.homeMainTitle}>{title}</h2>
            <p className={st.homeMainText}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
