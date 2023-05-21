import React from "react";
import cn from "classnames";
import st from "./Layout.module.scss";
import HeaderMain from "components/HeaderMain/HeaderMain";
import Footer from "components/Footer/Footer";

function Layout({
  children,
  classNamePageWrapper,
  renderFooter,
  classNamePageContentHolder,
  title,
  text,
  classNameHeader,
}) {
  return (
    <div className={st.rootWrapper}>
      <div className={st.headerHolder}>
        <HeaderMain title={title} text={text} className={classNameHeader} />
      </div>
      <div className={cn(st.pageWrapper, classNamePageWrapper)}>
        <div className={cn(st.pageContentHolder, classNamePageContentHolder)}>
          {children}
        </div>
      </div>
      <div className={cn(st.backgroundImg)} />
      <Footer />
    </div>
  );
}

export default Layout;
