import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ImagesViewerProvider } from "./contexts/ImageViewerProvider.tsx";
import "../styles/index.css";
import SiteRouter from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImagesViewerProvider>
      <SiteRouter />
    </ImagesViewerProvider>
  </StrictMode>,
);
