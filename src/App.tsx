import React from "react";
import ITrack from "./ITrack";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") || "light"
  );

  return (
    <div className="app">
      <Header activeTheme={theme} setActiveTheme={setTheme} />
      <ITrack />
      <Footer activeTheme={theme} setActiveTheme={setTheme} />
    </div>
  );
};

export default App;
