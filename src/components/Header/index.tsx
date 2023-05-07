import React from "react";
import Logo from "../../assests/images/i-trackTlogo.png";

import Styles from "./Header.module.css";

const Index = () => {
  return (
    <nav className={Styles.nav}>
      <img className={Styles.logo} src={Logo} alt="i-trackT" />
      <h5>Themes</h5>
    </nav>
  );
};

export default Index;
