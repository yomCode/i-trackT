import React from "react";
import ReactDoM from "react-dom/client";
import ITrack from "./ITrack";

import "./index.css";

const root = ReactDoM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ITrack />
  </React.StrictMode>
);
