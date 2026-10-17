import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import HomePage from "./pages/home-page/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/home", element: <Navigate to={"/"} replace={true} /> },
    ],
  },
]);

export default router;
