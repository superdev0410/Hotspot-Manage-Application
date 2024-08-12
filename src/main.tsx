import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import HotspotProvider from "./providers/HotspotProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HotspotProvider>
      <App />
    </HotspotProvider>
  </StrictMode>
);
