import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import { StateProvider } from "./contexts/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <StateProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </StateProvider>
  </StrictMode>,
);
