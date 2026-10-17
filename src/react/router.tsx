import { HashRouter, Routes, Route, Navigate } from "react-router";
import App from "./App.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";

function SiteRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default SiteRouter;
