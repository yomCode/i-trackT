import React from "react";
import Logo from "../../assests/images/i-trackTlogo.png";

import Styles from "./Header.module.css";

export interface ThemesProps {
  activeTheme: string;
  setActiveTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Index = ({ activeTheme, setActiveTheme }: ThemesProps) => {
  const handleChangeActiveTheme = (theme: string) => {
    setActiveTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const theme = localStorage.getItem("theme") || "light";

  document.documentElement.className = theme;

  return (
    <nav className={Styles.nav}>
      <img className={Styles.logo} src={Logo} alt="i-trackT" loading="lazy" />
      <div className="themes_selector">
        <span
          onClick={() => handleChangeActiveTheme("light")}
          className={`${"light"} ${activeTheme === "light" ? "active" : ""}`}
        ></span>
        <span
          onClick={() => handleChangeActiveTheme("medium")}
          className={`${"medium"} ${activeTheme === "medium" ? "active" : ""}`}
        ></span>
        {/* <span
          onClick={() => handleChangeActiveTheme("dark")}
          className={`${"dark"} ${activeTheme === "dark" ? "active" : ""}`}
        ></span> */}
        <span
          onClick={() => handleChangeActiveTheme("gOne")}
          className={`${"gOne"} ${activeTheme === "gOne" ? "active" : ""}`}
        ></span>
        <span
          onClick={() => handleChangeActiveTheme("gTwo")}
          className={`${"gTwo"} ${activeTheme === "gTwo" ? "active" : ""}`}
        ></span>
        <span
          onClick={() => handleChangeActiveTheme("gThree")}
          className={`${"gThree"} ${activeTheme === "gThree" ? "active" : ""}`}
        ></span>
      </div>
    </nav>
  );
};

export default Index;
