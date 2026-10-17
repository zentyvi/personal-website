import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes.tsx";
import { ImagesViewerProvider } from "./contexts/ImageViewerProvider.tsx";
import "../styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImagesViewerProvider>
      <RouterProvider router={router} />
    </ImagesViewerProvider>
  </StrictMode>,
);
