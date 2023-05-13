import React from "react";
import ITrack from "./ITrack";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ITrack />
      <Footer />
    </div>
  );
};

export default App;
