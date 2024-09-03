import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import { ConstantStringsProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConstantStringsProvider>
      <AppRoutes />
    </ConstantStringsProvider>
  </StrictMode>
);
