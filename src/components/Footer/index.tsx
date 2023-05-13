import React from "react";
import { ThemesProps } from "../Header";

const Footer = ({ activeTheme, setActiveTheme }: ThemesProps) => {
  return (
    <footer
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        color:
          activeTheme === "medium" || activeTheme === "light"
            ? "black"
            : "white",
        zIndex: 100,
      }}
    >
      <p>Yomicodes &copy;2022</p>
    </footer>
  );
};
export default Footer;
