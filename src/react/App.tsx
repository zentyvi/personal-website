import { Outlet } from "react-router";
import SiteHeader from "./components/SiteHeader.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import { useImagesViewer } from "./contexts/ImageViewerProvider.tsx";
import ImagesViewer from "./components/ImagesViewer.tsx";

function App() {
  const { isOpen: isImagesViewerOpen } = useImagesViewer();
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      {isImagesViewerOpen && <ImagesViewer />}
    </>
  );
}

export default App;
