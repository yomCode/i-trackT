import React from "react";
import Logo from "../../assests/images/i-trackTlogo.png";

import Styles from "./Header.module.css";

const Index = () => {
  const [activeTheme, setActiveTheme] = React.useState("medium");

  return (
    <nav className={Styles.nav}>
      <img className={Styles.logo} src={Logo} alt="i-trackT" loading="lazy" />
      <div className={Styles.themes_selector}>
        <span
          onClick={() => setActiveTheme("light")}
          className={[
            Styles.light,
            activeTheme === "light" ? Styles.active : "",
          ].join(" ")}
        ></span>
        <span
          onClick={() => setActiveTheme("medium")}
          className={[
            Styles.medium,
            activeTheme === "medium" ? Styles.active : "",
          ].join(" ")}
        ></span>
        <span
          onClick={() => setActiveTheme("dark")}
          className={[
            Styles.dark,
            activeTheme === "dark" ? Styles.active : "",
          ].join(" ")}
        ></span>
        <span
          onClick={() => setActiveTheme("gOne")}
          className={[
            Styles.gOne,
            activeTheme === "gOne" ? Styles.active : "",
          ].join(" ")}
        ></span>
        <span
          onClick={() => setActiveTheme("gTwo")}
          className={[
            Styles.gTwo,
            activeTheme === "gTwo" ? Styles.active : "",
          ].join(" ")}
        ></span>
        <span
          onClick={() => setActiveTheme("gThree")}
          className={[
            Styles.gThree,
            activeTheme === "gThree" ? Styles.active : "",
          ].join(" ")}
        ></span>
      </div>
    </nav>
  );
};

export default Index;
