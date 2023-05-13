import React, { useEffect } from "react";

const Footer = () => {
  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") ?? "[]"
  );

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "[]");
  }, [theme]);
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        color: theme === "dark" || "gTwo" ? "white" : "black",
      }}
    >
      <p>Yomicodes &copy;2022</p>
    </footer>
  );
};

export default Footer;
