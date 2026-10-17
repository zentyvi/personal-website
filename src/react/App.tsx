import { Outlet } from "react-router";
import SiteHeader from "./components/SiteHeader.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import { useImagesViewer } from "./contexts/ImageViewerProvider.tsx";
import ImagesViewer from "./components/ImagesViewer.tsx";
import { useEffect, useRef } from "react";

function App() {
  const { isOpen: isImagesViewerOpen } = useImagesViewer();
  const appRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const app = appRef.current;

    if (!app) return;
    const elementsToAnimate = app.querySelectorAll(".animate");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("visible")
        ) {
          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={appRef} id="app">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      {isImagesViewerOpen && <ImagesViewer />}
    </div>
  );
}

export default App;
