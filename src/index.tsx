import React from "react";
import ReactDOM from "react-dom/client";

import ITrack from "./ITrack";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ITrack />
  </React.StrictMode>
);
